import Word from "./Word";
import { colCount, type MatchState } from "../../store/PuzzleReducer";
import { memo } from "react";

interface PuzzleProps {
    words: string[][];
    currentGuess: string[];
    currentRow: number;
    matchStates: MatchState[][];
}

const Puzzle = memo(function Puzzle({words, currentGuess, currentRow, matchStates}: PuzzleProps) {
    return (
        <div className="w-full space-y-[10px] sm:gap-3">
            {words.map((word: string[], rowIndex: number) => {
                const isCurrentRow = rowIndex === currentRow;
                const rowContent = isCurrentRow ? 
                    [...currentGuess, ...Array(colCount - currentGuess.length).fill("")] : 
                    word;
                const rowStates = matchStates[rowIndex];
                
                return (
                    <Word 
                        key={`row-${rowIndex}`}
                        rowIndex={rowIndex}
                        word={rowContent} 
                        matchStates={rowStates}
                    />
                );
            })}
        </div>
    );
});

export default Puzzle;