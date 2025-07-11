'use client'

import { postDoublesMatch } from '@/app/actions'
import { User } from '@/app/generated/prisma'
import { ShieldIcon, SwordIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { DropdownInput } from './DropdownInput'
import TextButton from './TextButton'
import { Switch } from './ui/switch'

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

  const [loserCrawled, setLoserCrawled] = useState(false)
  const [goldenGoal, setGoldenGoal] = useState(false)

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
        type: 'doubles',
        winner: {
          forward: winnerF!,
          defensive: winnerD!,
        },
        loser: {
          forward: loserF!,
          defensive: loserD!,
        },
        loserCrawled: loserCrawled,
        goldenGoal: goldenGoal,
      })

      setWinnerD(undefined)
      setWinnerF(undefined)

      setLoserD(undefined)
      setLoserF(undefined)

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
        <div className="flex flex-col lg:flex-row items-center lg:gap-6 justify-between">
          <div className="flex flex-col w-full gap-2">
            Winner:
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={winnerD}
              onSelection={(selection) => setWinnerD(selection)}
              placeholder="Defensive player"
              icon={<ShieldIcon className="size-5 text-gray-400" />}
              searchable
            />
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={winnerF}
              onSelection={(selection) => setWinnerF(selection)}
              placeholder="Forward player"
              icon={<SwordIcon className="size-5 text-gray-400" />}
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
              icon={<ShieldIcon className="size-5 text-gray-400" />}
              searchable
            />
            <DropdownInput
              options={props.allUsers}
              render={(user) => user.name}
              currentSelection={loserF}
              onSelection={(selection) => setLoserF(selection)}
              placeholder="Forward player"
              icon={<SwordIcon className="size-5 text-gray-400" />}
              searchable
            />
          </div>
        </div>
        <div className="flex items-center gap-8 justify-between lg:justify-start lg:gap-32 pr-2">
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

export default DoublesMatchForm
