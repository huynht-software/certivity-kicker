import UserForm from '@/components/UserForm'
import UserList from '@/components/UserList'
import { getUsers } from '../actions'

type Props = {}

async function Users(props: Props) {
  const allUsers = await getUsers()

  return (
    <>
      <div className="flex flex-col gap-4">
        <UserForm />
        <UserList allUsers={allUsers} />
      </div>
    </>
  )
}

export default Users
