'use client'

import { createUser } from '@/app/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {}

function UserForm(props: Props) {
  const router = useRouter()

  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  async function createNewUser() {
    setLoading(true)

    try {
      await createUser({ name: name })

      setName('')

      router.refresh()
    } catch (error) {
      console.error('Error creating user:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col p-4 border rounded-md bg-gray-200">
        <input
          type="text"
          className="border rounded-md border-gray-800"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => createNewUser()} disabled={loading}>
          {loading ? '...' : 'submit'}
        </button>
      </div>
    </>
  )
}

export default UserForm
