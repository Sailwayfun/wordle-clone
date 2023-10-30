import Piece from "./Piece";
import { PuzzlePiece } from "../../types";
interface RowProps {
    colCount: number;
    word: PuzzlePiece[];
}
const Word = ({colCount, word}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-[10px] sm:gap-3">
            {colCount && word.map((piece:PuzzlePiece, index:number) => (<Piece key={index} text={piece.letter} status={piece.status}/>))}
        </div>
    )
};

export default Word;