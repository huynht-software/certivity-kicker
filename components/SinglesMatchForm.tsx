'use client'

import { postSinglesMatch } from '@/app/actions'
import { User } from '@/app/generated/prisma'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { DropdownInput } from './DropdownInput'
import TextButton from './TextButton'
import { Switch } from './ui/switch'

type Props = {
  allUsers: User[]
}

function SinglesMatchForm(props: Props) {
  const router = useRouter()

  const [winner, setWinner] = useState<User>()
  const [loser, setLoser] = useState<User>()

  const [loserCrawled, setLoserCrawled] = useState(false)
  const [goldenGoal, setGoldenGoal] = useState(false)

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
        loserCrawled: loserCrawled,
        goldenGoal: goldenGoal,
      })

      setWinner(undefined)
      setLoser(undefined)
      setLoserCrawled(false)

      setTimeout(() => {
        router.refresh()
      }, 100)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-5">
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
        <div className="flex items-center gap-8 justify-between lg:justify-start pr-2">
          <TextButton
            buttonText="Submit"
            onClick={() => submitMatchForm()}
            isLoading={loading}
            confirmationModal={
              loserCrawled
                ? {
                    description:
                      'This match will count double and dignity will be lost.',
                    confirmationButtonText: 'Make em crawl!',
                  }
                : undefined
            }
          />

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
            <div className="flex items-center gap-2">
              <Switch
                checked={loserCrawled}
                onCheckedChange={(e) => setLoserCrawled(e)}
              />
              Crawl
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={goldenGoal}
                onCheckedChange={(e) => setGoldenGoal(e)}
              />
              Golden Goal
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglesMatchForm
