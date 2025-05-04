import MatchList from '@/components/MatchList'
import { getMatches } from '../actions'

type Props = {}

async function Matches(props: Props) {
  const allMatches = await getMatches()

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <MatchList allMatches={allMatches} />
      </div>
    </>
  )
}

export default Matches
