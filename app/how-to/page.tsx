type Props = {}

function HowTo(props: Props) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="h-2/3 flex flex-col px-8 border-2 rounded-md pb-8">
          <div className="text-box">
            <h2>What is this?</h2>
            <div>
              This is an application to keep track of player's rankings for
              bragging rights.
            </div>
            <br />
            <div>Player's ratings are tracked in the following categories:</div>
            <ul className="list-disc">
              <li>Singles</li>
              <li>Doubles: defensive position</li>
              <li>Doubles: forward position</li>
            </ul>
            <br />
            <div>
              The rating changes are calculated based on expected game outcome,
              which is derived from the player's initial rating before the
              match.
            </div>
            <div>
              I.e. a lower-rated player winning against a higher-rated opponent
              will have a bigger impact on rating than the other way around.
            </div>
          </div>

          <div className="text-box">
            <h2>How does it work?</h2>
            <h3>Creating a match</h3>
            <div>
              Once all participating players agree to play a ranked match, the
              outcome can be recorded on this application:
            </div>
            <ul className="list-disc">
              <li>
                Select whether the game was a <b>singles</b> or a <b>doubles</b>{' '}
                match.
              </li>
              <li>
                Select the names of the winners and losers. Make sure that you
                fill out the positions correctly as each players forward and
                defensive rating are tracked separately.
              </li>
            </ul>
            <h3>Reverting a match</h3>
            <div>
              If you have wrongfully submitted a match or submitted a match with
              the wrong details, you can delete it again. For this, select the
              match you want to delete on any match list, type{' '}
              <b>CONFIRMATION</b> into the input field and press the{' '}
              <b>Delete</b> button.
            </div>
            <h3>User registration</h3>
            <div>
              User registration requires a super safe secure secret key™. Over
              the next couple of days, I will disperse this password to the
              right people such that new-joiners can be onboarded quickly.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowTo
