'use client'

import { Match, User } from '@/app/generated/prisma'
import { Util } from '@/lib/utils'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

type MatchWithUsers = Match & {
  winner: User | null
  loser: User | null
  winnerForward: User | null
  winnerDefensive: User | null
  loserForward: User | null
  loserDefensive: User | null
}

type Props = {
  allMatches: MatchWithUsers[]
}

const UserListColumns = ['Winner', 'Loser', 'Date'] as const

type SortDirection = 'asc' | 'desc'

function MatchList(props: Props) {
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const sortedMatches = useMemo(() => {
    return props.allMatches.sort((matchA, matchB) => {
      return sortDirection === 'desc'
        ? matchB.createdAt.getTime() - matchA.createdAt.getTime()
        : matchA.createdAt.getTime() - matchB.createdAt.getTime()
    })
  }, [sortDirection])

  // UTIL
  function revertDirection(direction: SortDirection) {
    if (direction === 'asc') return 'desc'

    return 'asc'
  }

  return (
    <>
      <div className="flex flex-col gap-2 border p-4 rounded-md">
        <table className="border-collapse">
          <thead className="font-bold border-b-2">
            <tr>
              {UserListColumns.map((columnName) => {
                if (columnName === 'Date') {
                  return (
                    <td
                      key={columnName}
                      className="cursor-pointer pb-2"
                      onClick={() =>
                        setSortDirection(revertDirection(sortDirection))
                      }
                    >
                      <div className="flex gap-1 items-center">
                        <div>{columnName}</div>
                        <div>
                          {sortDirection === 'desc' ? (
                            <ArrowDownIcon className="size-5" />
                          ) : (
                            <ArrowUpIcon className="size-5" />
                          )}
                        </div>
                      </div>
                    </td>
                  )
                }
                return (
                  <td key={columnName} className="pb-2">
                    <div className="flex gap-1 items-center">
                      <div>{columnName}</div>
                    </div>
                  </td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sortedMatches.map((match, i) => {
              return (
                <tr key={match.id} className={i !== 0 ? 'border-t' : ''}>
                  {match.isDoubles && (
                    <>
                      <td>
                        <div className="flex flex-col text-green-500">
                          <div>{match.winnerDefensive?.name}</div>
                          <div>{match.winnerForward?.name}</div>
                        </div>
                      </td>

                      <td>
                        <div className="flex flex-col text-red-500">
                          <div>{match.loserDefensive?.name}</div>
                          <div>{match.loserForward?.name}</div>
                        </div>
                      </td>
                    </>
                  )}
                  {!match.isDoubles && (
                    <>
                      <td className="text-green-500">
                        <div className="py-2">{match.winner!.name}</div>
                      </td>
                      <td className="text-red-500">
                        <div className="py-2">{match.loser!.name}</div>
                      </td>
                    </>
                  )}
                  <td>
                    <div className="flex gap-1 items-end">
                      {Util.formatDate(match.createdAt)}
                      <div className="text-xs pb-[2px]">
                        {Util.formatTime(match.createdAt)}
                      </div>
                    </div>
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

export default MatchList
