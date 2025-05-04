'use client'

import { User } from '@/app/generated/prisma'
import { Util } from '@/lib/utils'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

type Props = {
  allUsers: User[]
}

const UserListColumns = [
  'Name',
  'Single Rating',
  'Forward Rating',
  'Defensive Rating',
] as const
type UserListColumn = (typeof UserListColumns)[number]

type SortDirection = 'asc' | 'desc'

function UserList(props: Props) {
  const [sort, setSort] = useState<{
    column: UserListColumn
    direction: SortDirection
  }>({ column: 'Name', direction: 'desc' })

  const sortedUsers = useMemo(() => {
    return props.allUsers.sort((userA, userB) => {
      let comparison = 0
      switch (sort.column) {
        case 'Name':
          comparison = userB.name.localeCompare(userA.name)
          break
        case 'Single Rating':
          comparison = userA.singlesRating - userB.singlesRating
          break
        case 'Forward Rating':
          comparison = userA.forwardRating - userB.forwardRating
          break
        case 'Defensive Rating':
          comparison = userA.defensiveRating - userB.defensiveRating
          break
        default:
          Util.exhaustiveGuard(sort.column)
      }

      return sort.direction === 'desc' ? comparison * -1 : comparison
    })
  }, [sort])

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
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.singlesRating}</td>
                  <td>{user.forwardRating}</td>
                  <td>{user.defensiveRating}</td>
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
