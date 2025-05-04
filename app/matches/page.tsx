import MatchList from '@/components/MatchList'
import { getMatchesWithUsers } from '../actions'

type Props = {}

async function Matches(props: Props) {
  const allMatches = await getMatchesWithUsers()

  return (
    <>
      <div className="flex flex-col gap-4">
        <MatchList allMatches={allMatches} />
      </div>
    </>
  )
}

export default Matches
