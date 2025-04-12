import Piece from "./Piece";
import type { MatchState } from "../../store/PuzzleReducer";

interface RowProps {
    word: string[];
    matchStates: MatchState[];
}

const Word = ({word, matchStates}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-[10px] sm:gap-3">
            {word.map((letter: string, index: number) => (
                <Piece 
                    key={`piece-${Date.now()}-${index}`} 
                    text={letter} 
                    status={matchStates[index]}
                />
            ))}
        </div>
    );
};

export default Word;