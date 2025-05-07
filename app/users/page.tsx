import UserForm from '@/components/UserForm'
import UserList from '@/components/UserList'
import { getUsersWithMatches } from '../actions'

export const dynamic = 'force-dynamic'

type Props = {}

async function Users(props: Props) {
  const allUsers = await getUsersWithMatches()

  const password = process.env.USER_CREATION_PASSWORD!

  return (
    <>
      <div className="flex flex-col gap-4">
        <UserForm password={password} />
        <UserList usersWithMatches={allUsers} />
      </div>
    </>
  )
}

export default Users
