import { Match, User } from '@/app/generated/prisma'

export type MatchWithUsers = Match & {
  winner: User | null
  loser: User | null
  winnerForward: User | null
  winnerDefensive: User | null
  loserForward: User | null
  loserDefensive: User | null
}

export type MatchOutcome = SinglesMatchOutcome | DoublesMatchOutcome

export type SinglesMatchOutcome = {
  type: 'singles'
  winner: User
  loser: User
}

export type DoublesMatchOutcome = {
  type: 'doubles'
  winner: {
    forward: User
    defensive: User
  }
  loser: {
    forward: User
    defensive: User
  }
}
