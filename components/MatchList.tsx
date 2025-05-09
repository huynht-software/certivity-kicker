'use client'

import { MatchWithUsers } from '@/lib/types'
import { Util } from '@/lib/utils'
import { ArrowDownIcon, ArrowUpIcon, FlameIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import UserList from './UserList'

type Props = {
  allMatches: MatchWithUsers[]
}

const UserListColumns = ['Winner', 'Loser', '±', 'Date'] as const

type SortDirection = 'asc' | 'desc'

function MatchList(props: Props) {
  const router = useRouter()

  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const sortedMatches = useMemo(() => {
    return props.allMatches.sort((matchA, matchB) => {
      return sortDirection === 'desc'
        ? matchB.createdAt.getTime() - matchA.createdAt.getTime()
        : matchA.createdAt.getTime() - matchB.createdAt.getTime()
    })
  }, [sortDirection, props.allMatches])

  // UTIL
  function revertDirection(direction: SortDirection) {
    if (direction === 'asc') return 'desc'

    return 'asc'
  }

  return (
    <>
      <div className="flex flex-col gap-2 border rounded-md pt-2">
        <table className="border-collapse">
          <thead className="font-bold border-b-2">
            <tr>
              {UserListColumns.map((columnName, i) => {
                if (columnName === 'Date') {
                  return (
                    <td
                      key={columnName}
                      className="cursor-pointer pb-2"
                      onClick={() =>
                        setSortDirection(revertDirection(sortDirection))
                      }
                    >
                      <div className="flex gap-1 items-center justify-end lg:justify-start">
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
                    <div
                      className={`w-full flex ${i === 0 ? 'pl-2' : ''} ${
                        i === UserList.length ? 'pr-2' : ''
                      }  ${columnName === '±' ? 'pl-1' : ''}`}
                    >
                      {columnName}
                    </div>
                  </td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sortedMatches.map((match, i) => {
              return (
                <tr
                  key={match.id}
                  className={`cursor-pointer ${i !== 0 ? 'border-t' : ''} ${
                    match.loserCrawled ? 'bg-red-200' : ''
                  }`}
                  onClick={() => {
                    router.push(`/matches/${match.id}`)
                  }}
                >
                  {match.isDoubles && (
                    <>
                      <td className="pl-2">
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
                      <td className="text-green-500 pl-2">
                        <div className="py-2">{match.winner!.name}</div>
                      </td>
                      <td className="text-red-500">
                        <div className="py-2">{match.loser!.name}</div>
                      </td>
                    </>
                  )}
                  <td>
                    <div className="flex items-center gap-0.5">
                      <div
                        className={`${match.loserCrawled ? 'font-bold' : ''}`}
                      >
                        {match.ratingChange}
                      </div>
                      {match.loserCrawled && (
                        <FlameIcon className="size-5 text-red-500" />
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-end lg:items-start pr-2">
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
