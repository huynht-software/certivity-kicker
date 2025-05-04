import { DoublesMatchOutcome, MatchOutcome, SinglesMatchOutcome } from './types'

function getSinglesRatingChange(matchOutcome: SinglesMatchOutcome): number {
  const kFactor = getKFactor(matchOutcome)

  const winner = matchOutcome.winner
  const loser = matchOutcome.loser

  const expectedA = calculateExpectedScoreA(
    winner.singlesRating,
    loser.singlesRating
  )

  return kFactor * (1 - expectedA)
}

function getDoublesRatingChange(match: DoublesMatchOutcome): number {
  const kFactor = getKFactor(match)

  const winnerForward = match.winner.forward
  const winnerDefensive = match.winner.defensive
  const loserForward = match.loser.forward
  const loserDefensive = match.loser.defensive

  const ratingTeamA =
    (winnerForward.forwardRating + winnerDefensive.defensiveRating) / 2
  const ratingTeamB =
    (loserForward.forwardRating + loserDefensive.defensiveRating) / 2

  const expectedA = calculateExpectedScoreA(ratingTeamA, ratingTeamB)

  return kFactor * (1 - expectedA)
}

function calculateExpectedScoreA(ratingA: number, ratingB: number): number {
  const exponentA = (ratingB - ratingA) / 400
  return 1 / (1 + Math.pow(10, exponentA))
}

function getKFactor(match: MatchOutcome): number {
  const averageRatingKFactor = 64
  const highRatingKFactor = 48

  const averageRating = getAverageRating(match)

  if (averageRating === undefined) {
    return averageRatingKFactor
  }

  if (averageRating > 1200) {
    return highRatingKFactor
  }

  return averageRatingKFactor
}

function getAverageRating(match: MatchOutcome) {
  if (match.type === 'doubles') {
    return (
      (match.winner.defensive.defensiveRating +
        match.winner.forward.forwardRating +
        match.loser.defensive.defensiveRating +
        match.loser.forward.forwardRating) /
      4
    )
  }

  return (match.winner.singlesRating + match.loser.singlesRating) / 2
}

export const RatingUtils = {
  getSinglesRatingChange,
  getDoublesRatingChange,
}
