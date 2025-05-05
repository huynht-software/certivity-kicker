import UserForm from '@/components/UserForm'
import UserList from '@/components/UserList'
import { getUsers } from '../actions'

type Props = {}

async function Users(props: Props) {
  const allUsers = await getUsers()

  const password = process.env.USER_CREATION_PASSWORD!

  return (
    <>
      <div className="flex flex-col gap-4">
        <UserForm password={password} />
        <UserList allUsers={allUsers} />
      </div>
    </>
  )
}

export default Users
