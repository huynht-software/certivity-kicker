import { SortDirection, UserListColumn } from '@/components/UserList'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { UserWithMatches } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function exhaustiveGuard(x: never) {
  console.error(
    "Didn't expect to get here. One of your exhaustive switch statements seems to be incomplete.",
    x
  )
}

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Month is 0-indexed
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

export const Util = {
  exhaustiveGuard,
  formatDate,
  formatTime,
}

function getGameCount(user: UserWithMatches): {
  singles: number
  forward: number
  defensive: number
} {
  return {
    singles: user.wonSingles.length + user.lostSingles.length,
    forward: user.wonDoublesForward.length + user.lostDoublesForward.length,
    defensive:
      user.wonDoublesDefensive.length + user.lostDoublesDefensive.length,
  }
}

function sortUsers(
  users: UserWithMatches[],
  column: UserListColumn,
  direction: SortDirection
) {
  return users.sort((userA, userB) => {
    let comparison = 0
    const gameCountA = UserUtil.getGameCount(userA)
    const gameCountB = UserUtil.getGameCount(userB)

    const nameComparison = userB.name.localeCompare(userA.name)

    switch (column) {
      case 'Name':
        comparison = nameComparison
        break
      case 'Singles':
        if (gameCountA.singles === 0 && gameCountB.singles > 0) {
          return 1
        }
        if (gameCountA.singles > 0 && gameCountB.singles === 0) {
          return -1
        }
        if (gameCountA.singles === 0 && gameCountB.singles === 0) {
          return nameComparison
        }

        comparison = userA.singlesRating - userB.singlesRating
        break
      case 'Forward':
        if (gameCountA.forward === 0 && gameCountB.forward > 0) {
          return 1
        }
        if (gameCountA.forward > 0 && gameCountB.forward === 0) {
          return -1
        }
        if (gameCountA.forward === 0 && gameCountB.forward === 0) {
          return nameComparison
        }

        comparison = userA.forwardRating - userB.forwardRating
        break
      case 'Defensive':
        if (gameCountA.defensive === 0 && gameCountB.defensive > 0) return 1
        if (gameCountA.defensive > 0 && gameCountB.defensive === 0) return -1
        if (gameCountA.defensive === 0 && gameCountB.defensive === 0)
          return nameComparison

        comparison = userA.defensiveRating - userB.defensiveRating
        break
      default:
        Util.exhaustiveGuard(column)
    }

    return direction === 'desc' ? comparison * -1 : comparison
  })
}

export const UserUtil = { getGameCount, sortUsers }
