'use client'

import { createUser } from '@/app/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import TextButton from './TextButton'

type Props = {
  password: string
}

function UserForm(props: Props) {
  const router = useRouter()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function createNewUser() {
    if (process.env.NODE_ENV !== 'development' && password !== props.password) {
      toast('wrong password')
      return
    }

    setLoading(true)

    try {
      await createUser({ name: name })

      setName('')
      setPassword('')

      setTimeout(() => {
        router.refresh()
      }, 100)
    } catch (error) {
      console.error('Error creating user:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-4 border rounded-md bg-gray-200">
        <div className="font-bold">Submit new user</div>
        <div className="flex flex-col lg:flex-row gap-2">
          Name
          <input
            type="text"
            className="text-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          Password
          <input
            type="password"
            className="text-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <TextButton
          buttonText="Submit"
          onClick={() => createNewUser()}
          isLoading={loading}
        />
      </div>
    </>
  )
}

export default UserForm
