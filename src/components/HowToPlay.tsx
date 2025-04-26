import { Link } from 'react-router-dom';
import Wrapper from './UI/Wrapper';

const HowToPlay = () => {

  return (
    <Wrapper>
      <div className="flex flex-col items-center space-y-6 py-8">
        <h2 className="text-3xl font-bold mb-4">How to Play <span className="font-heading" style={{viewTransitionName: "wordle-title"}}>Wordle 2</span></h2>
        <ol className="list-decimal list-inside text-lg space-y-2 text-left max-w-xl">
          <li>Guess the hidden word in 6 tries.</li>
          <li>Each guess must be a valid 5-letter word. Hit the enter button to submit.</li>
          <li className="text-balance">After each guess, the color of the tiles will change to show how close your guess was to the word.</li>
          <li><span className="font-bold text-green">Green</span>: Correct letter in the correct spot.</li>
          <li><span className="font-bold text-bronze">Bronze</span>: Correct letter in the wrong spot.</li>
          <li><span className="font-bold text-dark-gray">Gray</span>: Letter is not in the word at all.</li>
        </ol>
        <Link
          to="/game"
          viewTransition
          className="mt-8 px-6 py-3 bg-green hover:opacity-80 text-white rounded-lg text-xl font-semibold hover:bg-green-700 transition"
        >
          Go to Puzzle
        </Link>
      </div>
    </Wrapper>
  );
};

export default HowToPlay; 