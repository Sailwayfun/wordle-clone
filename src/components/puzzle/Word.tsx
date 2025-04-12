import Piece from "./Piece";
import type { MatchState } from "../../store/PuzzleReducer";
import { memo } from "react";

interface RowProps {
    word: string[];
    matchStates: MatchState[];
    rowIndex: number;  // Add rowIndex for stable keys
}

const Word = memo(function Word({word, matchStates, rowIndex}: RowProps) {
    return (
        <div className="w-full grid grid-cols-5 gap-[10px] sm:gap-3">
            {word.map((letter: string, index: number) => (
                <Piece 
                    key={`piece-${rowIndex}-${index}`}  // Use rowIndex for stable keys
                    text={letter}
                    status={matchStates[index]}
                />
            ))}
        </div>
    );
});

export default Word;