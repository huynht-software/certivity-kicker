'use client'

import { postSinglesMatch } from '@/app/actions'
import { User } from '@/app/generated/prisma'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { DropdownInput } from './DropdownInput'
import TextButton from './TextButton'

type Props = {
  allUsers: User[]
}

function SinglesMatchForm(props: Props) {
  const router = useRouter()

  const [winner, setWinner] = useState<User>()
  const [loser, setLoser] = useState<User>()
  const [loading, setLoading] = useState(false)

  async function submitMatchForm() {
    if (!winner || !loser) {
      toast('Please select both a winner and loser!')
      return
    }

    if (winner.id === loser.id) {
      toast('Winner cannot be the same as loser')
      return
    }

    setLoading(true)

    try {
      await postSinglesMatch({
        type: 'singles',
        winner: winner,
        loser: loser,
      })

      setWinner(undefined)
      setLoser(undefined)

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
              currentSelection={winner}
              onSelection={(selection) => setWinner(selection)}
              placeholder="Winner"
              searchable
            />
          </div>
          <div className="mt-8">vs.</div>
          <div className="flex flex-col w-full gap-2">
            Loser:
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={loser}
              onSelection={(selection) => setLoser(selection)}
              placeholder="Loser"
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

export default SinglesMatchForm
