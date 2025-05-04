'use client'

import { postDoublesMatch } from '@/app/actions'
import { User } from '@/app/generated/prisma'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { DropdownInput } from './DropdownInput'
import TextButton from './TextButton'

type Props = {
  allUsers: User[]
}

function DoublesMatchForm(props: Props) {
  // HOOKS INIT
  const router = useRouter()

  // LOCAL STATE
  const [winnerD, setWinnerD] = useState<User>()
  const [winnerF, setWinnerF] = useState<User>()

  const [loserD, setLoserD] = useState<User>()
  const [loserF, setLoserF] = useState<User>()

  const [loading, setLoading] = useState(false)

  // UTIL
  function checkInputValidity(): boolean {
    if (!winnerD || !winnerF || !loserD || !loserF) {
      toast('Please select all participating players')
      return false
    }
    const userIds = new Set([winnerD.id, winnerF.id, loserD.id, loserF.id])

    if (userIds.size !== 4) {
      toast('Please select distinct players for each position')
      return false
    }

    return true
  }

  // USER INPUT
  async function submitMatchForm() {
    if (checkInputValidity() === false) {
      return
    }

    setLoading(true)

    try {
      await postDoublesMatch({
        winner: {
          forwardId: winnerF!.id,
          defensiveId: winnerD!.id,
        },
        loser: {
          forwardId: loserF!.id,
          defensiveId: loserD!.id,
        },
      })

      setWinnerD(undefined)
      setWinnerF(undefined)

      setLoserD(undefined)
      setLoserF(undefined)

      router.refresh()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6 justify-between">
          <div className="flex flex-col w-full gap-2">
            Winner:
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={winnerD}
              onSelection={(selection) => setWinnerD(selection)}
              placeholder="Defensive player"
              searchable
            />
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={winnerF}
              onSelection={(selection) => setWinnerF(selection)}
              placeholder="Forward player"
              searchable
            />
          </div>
          <div className="mt-4">vs.</div>
          <div className="flex flex-col w-full gap-2">
            Loser:
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={loserD}
              onSelection={(selection) => setLoserD(selection)}
              placeholder="Defensive player"
              searchable
            />
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={loserF}
              onSelection={(selection) => setLoserF(selection)}
              placeholder="Forward player"
              searchable
            />
          </div>
        </div>
        <TextButton
          buttonText="Submit"
          onClick={() => submitMatchForm()}
          isLoading={loading}
        />
      </div>
    </>
  )
}

export default DoublesMatchForm
