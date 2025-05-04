import UserForm from '@/components/UserForm'
import UserList from '@/components/UserList'
import { getAllUsers } from '../actions'

type Props = {}

async function Users(props: Props) {
  const allUsers = await getAllUsers()

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <UserForm />
        <UserList allUsers={allUsers} />
      </div>
    </>
  )
}

export default Users
