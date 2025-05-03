'use server'
import prisma from '@/lib/prisma'

// USERS
// read
export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      include: {
        wonSingles: true,
      },
      orderBy: {
        name: 'desc',
      },
    })

    console.log(users)

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
export async function getMatches() {
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
    })

    return matches
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

// post single match
export async function postSinglesMatch(input: {
  winnerId: string
  loserId: string
}) {
  try {
    const match = await prisma.match.create({
      data: {
        isDoubles: false,
        winnerId: input.winnerId,
        loserId: input.loserId,
      },
    })

    return match
  } catch (error: any) {
    throw new Error('Failed to create singles match')
  }
}

// post doubles match
export async function postDoublesMatch(input: {
  winner: {
    forwardId: string
    defensiveId: string
  }
  loser: {
    forwardId: string
    defensiveId: string
  }
}) {
  try {
    const match = await prisma.match.create({
      data: {
        isDoubles: true,

        // winner
        winnerForwardId: input.winner.forwardId,
        winnerDefensiveId: input.winner.defensiveId,

        // loser
        loserForwardId: input.loser.forwardId,
        loserDefensiveId: input.loser.defensiveId,
      },
    })

    return match
  } catch (error: any) {
    throw new Error('Failed to create singles match')
  }
}
