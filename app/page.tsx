import MatchForm from '@/components/MatchForm'
import UserForm from '@/components/UserForm'
import { getMatches, getUsers } from './actions'

export default async function Home() {
  const users = await getUsers()
  const matches = await getMatches()

  return (
    <div>
      <div className="bg-red-300 flex flex-col">
        <div>Users:</div>
        <div>
          {users.map((user) => {
            return (
              <div key={user.id} className="flex gap-2">
                <div>{user.name}</div>
                <div>{JSON.stringify(user)}</div>
              </div>
            )
          })}
        </div>

        <div>Matches</div>
        <div className="flex flex-col gap-2">
          {matches.map((match) => {
            return (
              <div key={match.id} className="flex gap-4 items-center border">
                {match.isDoubles && (
                  <>
                    <div className="flex flex-col text-green-500">
                      <div>{match.winnerDefensive?.name}</div>
                      <div>{match.winnerForward?.name}</div>
                    </div>
                    vs.
                    <div className="flex flex-col text-red-500">
                      <div>{match.loserDefensive?.name}</div>
                      <div>{match.loserForward?.name}</div>
                    </div>
                  </>
                )}
                {!match.isDoubles && (
                  <>
                    <div className="text-green-500">{match.winner!.name}</div>
                    vs.
                    <div className="text-red-500">{match.loser!.name}</div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className="bg-blue-300">
        Submit new user
        <UserForm />
      </div>

      <div className="bg-green-300">
        <MatchForm allUsers={users} />
      </div>
    </div>
  )
}
