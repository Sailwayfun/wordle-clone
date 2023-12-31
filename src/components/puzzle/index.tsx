import Word from "./Word";
import { colCount } from "../../store/puzzleReducer";

interface PuzzleProps {
    words: string[][];
    answer: string[];
    currentGuess: string[];
    currentRow: number;
}
const Puzzle = ({words, answer, currentGuess, currentRow}:PuzzleProps) => {
    return (
        <div className="w-full space-y-[10px] sm:space-y-3">
            {words.map((word:string[], index:number) => {
                const isCurrentRow = index === currentRow;
                const isGuessing = isCurrentRow && currentGuess.length > 0;
                const rowContent = isCurrentRow ? [...currentGuess, ...Array(colCount - currentGuess.length).fill("")] : word;
                return (
                <Word key={index} word={rowContent} answer={answer} isGuessing={isGuessing}/>
                );
            })}
        </div>
    );
};

export default Puzzle;