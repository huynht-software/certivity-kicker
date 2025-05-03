'use client'

import { User } from '@/app/generated/prisma'
import { useState } from 'react'
import { DropdownInput } from './DropdownInput'

type Props = {
  allUsers: User[]
}

function SingleMatchForm(props: Props) {
  const [winner, setWinner] = useState<User>()
  const [loser, setLoser] = useState<User>()

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 justify-between">
          <div>Winner: </div>
          <DropdownInput
            options={props.allUsers}
            currentSelection={winner}
            onSelection={(selection) => setWinner(selection)}
            placeholder="Winner"
          />
        </div>
        <div className="flex items-center gap-2 justify-between">
          <div>Loser:</div>
        </div>
      </div>
    </>
  )
}

export default SingleMatchForm
