import { getMatchWithUsers } from '@/app/actions'
import LoadingDiv from '@/components/LoadingDiv'
import DeleteMatchButton from './DeleteMatchButton'

export default async function MatchPage({
  params,
}: {
  params: Promise<{ matchId: string }>
}) {
  const { matchId } = await params

  const match = await getMatchWithUsers({ id: matchId })

  if (!match) return <LoadingDiv />
  return (
    <div className="flex flex-col border rounded-md gap-8 p-4">
      <div className="font-bold">
        {match.isDoubles ? 'Doubles Match' : 'Singles Match'}
      </div>
      <div className="flex flex-col items-center gap-6">
        {match.isDoubles && (
          <>
            <div className="relative flex flex-col gap-1 items-center text-green-500">
              <div>{match.winnerDefensive?.name}</div>
              <div>{match.winnerForward?.name}</div>
              <div className="absolute -right-8 top-5 text-xs">
                + {match.ratingChange}
              </div>
            </div>
            <div>vs.</div>
            <div className="relative flex flex-col gap-1 items-center text-red-500">
              <div>{match.loserDefensive?.name}</div>
              <div>{match.loserForward?.name}</div>
              <div className="absolute -right-8 top-5 text-xs">
                - {match.ratingChange}
              </div>
            </div>
          </>
        )}
        {!match.isDoubles && (
          <>
            <div className="text-green-500 flex items-end gap-2">
              <div className="">{match.winner!.name}</div>
              <div className="text-xs pb-1">+{match.ratingChange}</div>
            </div>
            <div>vs.</div>
            <div className="text-red-500 flex items-end gap-2">
              <div className="">{match.loser!.name}</div>
              <div className="text-xs pb-1">-{match.ratingChange}</div>
            </div>
          </>
        )}
      </div>
      <div className="mt-8">
        <DeleteMatchButton match={match} />
      </div>
    </div>
  )
}
