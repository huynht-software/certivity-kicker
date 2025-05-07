'use server'
import prisma from '@/lib/prisma'
import { RatingUtils } from '@/lib/ratingUtils'
import { DoublesMatchOutcome, SinglesMatchOutcome } from '@/lib/types'

import { revalidatePath } from 'next/cache'
import { Match } from './generated/prisma'

// UTIL
function revalidateAll() {
  revalidatePath('/')
  revalidatePath('/matches')
  revalidatePath('/users')
}

// USERS
// read
export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    })

    return users
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

export async function getUsersWithMatches() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
      include: {
        wonSingles: true,
        lostSingles: true,

        wonDoublesForward: true,
        wonDoublesDefensive: true,
        lostDoublesForward: true,
        lostDoublesDefensive: true,
      },
    })

    return users
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

// post
export async function createUser({ name }: { name: string }) {
  try {
    const user = await prisma.user.create({
      data: {
        name,
      },
    })

    return user
  } catch (error: any) {
    // Handle duplicate email error
    if (error.code === 'P2002') {
      throw new Error('A user with this email already exists')
    }

    throw new Error('Failed to create user')
  }
}

// MATCHES
// read all matches
export async function getMatchesWithUsers(input?: { limit?: number }) {
  try {
    const matches = await prisma.match.findMany({
      include: {
        // singles
        winner: true,
        loser: true,

        // doubles
        winnerForward: true,
        winnerDefensive: true,

        loserForward: true,
        loserDefensive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: input?.limit,
    })

    return matches
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

export async function getMatchWithUsers(input: { id: string }) {
  try {
    const matches = await prisma.match.findFirst({
      where: {
        id: input.id,
      },
      include: {
        // singles
        winner: true,
        loser: true,

        // doubles
        winnerForward: true,
        winnerDefensive: true,

        loserForward: true,
        loserDefensive: true,
      },
    })

    return matches
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

// post single match
export async function postSinglesMatch(matchOutcome: SinglesMatchOutcome) {
  try {
    const ratingChange = RatingUtils.getSinglesRatingChange(matchOutcome)

    const match = await prisma.match.create({
      data: {
        isDoubles: false,
        winnerId: matchOutcome.winner.id,
        loserId: matchOutcome.loser.id,
        ratingChange: ratingChange,
      },
    })

    await prisma.user.update({
      where: { id: matchOutcome.winner.id },
      data: { singlesRating: { increment: ratingChange } },
    })

    await prisma.user.update({
      where: { id: matchOutcome.loser.id },
      data: { singlesRating: { increment: -ratingChange } },
    })

    return match
  } catch (error: any) {
    console.error(error)
    throw new Error('Failed to create singles match')
  }
}

// post doubles match
export async function postDoublesMatch(matchOutcome: DoublesMatchOutcome) {
  try {
    const ratingChange = RatingUtils.getDoublesRatingChange(matchOutcome)

    const match = await prisma.match.create({
      data: {
        isDoubles: true,

        // winners
        winnerForwardId: matchOutcome.winner.forward.id,
        winnerDefensiveId: matchOutcome.winner.defensive.id,

        // losers
        loserForwardId: matchOutcome.loser.forward.id,
        loserDefensiveId: matchOutcome.loser.defensive.id,

        ratingChange: ratingChange,
      },
    })

    await prisma.user.update({
      where: { id: matchOutcome.winner.forward.id },
      data: { forwardRating: { increment: ratingChange } },
    })

    await prisma.user.update({
      where: { id: matchOutcome.winner.defensive.id },
      data: { defensiveRating: { increment: ratingChange } },
    })

    await prisma.user.update({
      where: { id: matchOutcome.loser.forward.id },
      data: { forwardRating: { increment: -ratingChange } },
    })

    await prisma.user.update({
      where: { id: matchOutcome.loser.defensive.id },
      data: { defensiveRating: { increment: -ratingChange } },
    })

    return match
  } catch (error: any) {
    throw new Error('Failed to create singles match')
  }
}

// delete singles match
export async function deleteSinglesMatch(input: { match: Match }) {
  try {
    const { match } = input
    const ratingChange = match.ratingChange

    await prisma.match.delete({
      where: {
        id: input.match.id,
      },
    })

    await prisma.user.update({
      where: { id: match.winnerId! },
      data: { singlesRating: { increment: -ratingChange } },
    })

    await prisma.user.update({
      where: { id: match.loserId! },
      data: { singlesRating: { increment: ratingChange } },
    })

    revalidateAll()
  } catch (error: any) {
    console.error(error)
    throw new Error('Failed to delete singles match')
  }
}

// delete doubles match
export async function deleteDoublesMatch(input: { match: Match }) {
  try {
    const { match } = input
    const ratingChange = match.ratingChange

    await prisma.match.delete({
      where: {
        id: input.match.id,
      },
    })

    await prisma.user.update({
      where: { id: match.winnerForwardId! },
      data: { forwardRating: { increment: -ratingChange } },
    })

    await prisma.user.update({
      where: { id: match.winnerDefensiveId! },
      data: { defensiveRating: { increment: -ratingChange } },
    })

    await prisma.user.update({
      where: { id: match.loserForwardId! },
      data: { forwardRating: { increment: ratingChange } },
    })

    await prisma.user.update({
      where: { id: match.loserDefensiveId! },
      data: { defensiveRating: { increment: ratingChange } },
    })

    revalidateAll()
  } catch (error: any) {
    console.error(error)
    throw new Error('Failed to delete doubles match')
  }
}
