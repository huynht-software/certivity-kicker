'use client'

import { deleteDoublesMatch, deleteSinglesMatch } from '@/app/actions'
import { Match } from '@/app/generated/prisma'
import TextButton from '@/components/TextButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

type Props = {
  match: Match
}

const CONFIRMATION_TEXT = 'CONFIRMATION'

function DeleteMatchButton(props: Props) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [confirmationText, setConfirmationText] = useState('')

  async function deleteMatch() {
    if (confirmationText !== CONFIRMATION_TEXT) {
      toast(
        'Please put CONFIRMATION into the input field if you want to delete this match'
      )
      setConfirmationText('')
      return
    }

    setLoading(true)

    try {
      if (props.match.isDoubles) {
        await deleteDoublesMatch({
          match: props.match,
        })
      } else {
        await deleteSinglesMatch({ match: props.match })
      }
    } catch (e) {
      console.error(e)
      toast('Error when deleting match')
    } finally {
      router.refresh()
      router.back()
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          className="text-input"
          placeholder="CONFIRMATION"
          type="text"
          value={confirmationText}
          onChange={(e) => setConfirmationText(e.target.value)}
        />
        <TextButton
          style="negative"
          onClick={() => {
            deleteMatch()
          }}
          buttonText="Delete"
          isLoading={loading}
        />
      </div>
    </>
  )
}

export default DeleteMatchButton
