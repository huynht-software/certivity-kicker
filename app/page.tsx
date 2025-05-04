import MatchForm from '@/components/MatchForm'
import MatchList from '@/components/MatchList'
import { getAllUsers, getMatches } from './actions'

export default async function Home() {
  const allUsers = await getAllUsers()
  const recentMatches = await getMatches({ limit: 10 })

  return (
    <div className="p-4 flex justify-center gap-4 w-full">
      <div className="w-2/3 flex flex-col">
        <MatchForm allUsers={allUsers} />

        <div className="mt-12 flex flex-col gap-2">
          <div className="font-bold">Last 10 Matches</div>
          <MatchList allMatches={recentMatches} />
        </div>
      </div>
    </div>
  )
}
