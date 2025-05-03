import UserForm from '@/components/UserForm'
import { getUsers } from './actions'

export default async function Home() {
  const users = await getUsers()

  return (
    <div className="bg-red-300">
      <div>{JSON.stringify(users)}</div>
      <UserForm />
    </div>
  )
}
