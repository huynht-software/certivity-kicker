import MatchForm from '@/components/MatchForm'
import MatchList from '@/components/MatchList'
import { getMatchesWithUsers, getUsers } from './actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const allUsers = await getUsers()
  const recentMatches = await getMatchesWithUsers({ limit: 10 })

  return (
    <div className="flex justify-center gap-4 w-full">
      <div className="flex flex-col w-full">
        <MatchForm allUsers={allUsers} />

        <div className="mt-12 flex flex-col gap-2">
          <div className="font-bold">Last 10 Matches</div>
          <MatchList allMatches={recentMatches} />
        </div>
      </div>
    </div>
  )
}
