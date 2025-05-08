'use client'

import { UserWithMatches } from '@/lib/types'
import { UserUtil, Util } from '@/lib/utils'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

type Props = {
  usersWithMatches: UserWithMatches[]
}

export const UserListColumns = [
  'Name',
  'Singles',
  'Forward',
  'Defensive',
] as const
export type UserListColumn = (typeof UserListColumns)[number]

export type SortDirection = 'asc' | 'desc'

function UserList(props: Props) {
  const [sort, setSort] = useState<{
    column: UserListColumn
    direction: SortDirection
  }>({ column: 'Name', direction: 'desc' })

  const sortedUsers = useMemo(() => {
    return UserUtil.sortUsers(
      props.usersWithMatches,
      sort.column,
      sort.direction
    )
  }, [sort, props.usersWithMatches])

  function toggleSort(columnName: UserListColumn) {
    const newDirection =
      sort.column !== columnName ? 'desc' : revertDirection(sort.direction)

    setSort({ column: columnName, direction: newDirection })
  }

  // UTIL
  function revertDirection(direction: SortDirection) {
    if (direction === 'asc') return 'desc'

    return 'asc'
  }

  // RENDER UTIL
  function getDisplayRank(
    user: UserWithMatches,
    type: 'singles' | 'forward' | 'defensive'
  ) {
    const gameCount = UserUtil.getGameCount(user)
    const { rank, wins, losses } = (() => {
      const unranked = { rank: 'unranked', wins: 0, losses: 0 }

      switch (type) {
        case 'singles':
          if (gameCount.singles === 0) {
            return unranked
          }
          return {
            rank: user.singlesRating,
            wins: user.wonSingles.length,
            losses: user.lostSingles.length,
          }
        case 'forward':
          if (gameCount.forward === 0) {
            return unranked
          }
          return {
            rank: user.forwardRating,
            wins: user.wonDoublesForward.length,
            losses: user.lostDoublesForward.length,
          }
        case 'defensive':
          if (gameCount.defensive === 0) {
            return unranked
          }
          return {
            rank: user.defensiveRating,
            wins: user.wonDoublesDefensive.length,
            losses: user.lostDoublesDefensive.length,
          }
        default:
          Util.exhaustiveGuard(type)
          return unranked
      }
    })()

    if (rank === 'unranked') {
      return <div>Unranked</div>
    }

    return (
      <>
        <div className="flex flex-col">
          <div>{rank}</div>
          <div className="text-xs -mt-2 text-gray-600">
            <span className="text-green-500">{wins}</span>-
            <span className="text-red-500">{losses}</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-2 border p-4 rounded-md">
        <table>
          <thead className="font-bold">
            <tr>
              {UserListColumns.map((columnName) => {
                return (
                  <td
                    key={columnName}
                    className="cursor-pointer pb-2"
                    onClick={() => toggleSort(columnName)}
                  >
                    <div className="flex gap-1 items-center">
                      <div>{columnName}</div>
                      {sort.column === columnName ? (
                        <div>
                          {sort.direction === 'desc' ? (
                            <ArrowDownIcon className="size-5" />
                          ) : (
                            <ArrowUpIcon className="size-5" />
                          )}
                        </div>
                      ) : (
                        <div className="size-5" />
                      )}
                    </div>
                  </td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => {
              return (
                <tr key={user.id} onClick={() => console.log(user)}>
                  <td className="py-1 align-top">{user.name}</td>
                  <td className="py-1 align-top">
                    <div className="flex flex-col">
                      {getDisplayRank(user, 'singles')}
                    </div>
                  </td>
                  <td className="py-1 align-top">
                    <div className="flex flex-col">
                      {getDisplayRank(user, 'forward')}
                    </div>
                  </td>
                  <td className="py-1 align-top">
                    {getDisplayRank(user, 'defensive')}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList
