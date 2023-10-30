import Word from "./Word";
import { PuzzlePiece } from "../../App";

interface PuzzleProps {
    words: PuzzlePiece[][];
}
const Puzzle = ({words}:PuzzleProps) => {
    const colCount:number = 5;
    return (
        <div className="w-full space-y-3">
            {words.map((word:PuzzlePiece[], index:number) => {
                return <Word key={index} word={word} colCount={colCount}/>
            })}
        </div>
    )
};

export default Puzzle;