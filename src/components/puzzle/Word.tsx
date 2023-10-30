import Piece from "./Piece";
import { PuzzlePiece } from "../../App";
interface RowProps {
    colCount: number;
    word: PuzzlePiece[];
}
const Word = ({colCount, word}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-3">
            {colCount && word.map((piece:PuzzlePiece, index:number) => (<Piece key={index} text={piece.letter}/>))}
        </div>
    )
};

export default Word;