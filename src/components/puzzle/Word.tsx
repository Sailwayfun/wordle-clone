import Piece from "./Piece";
interface RowProps {
    colCount: number;
}
const Word = ({colCount}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-1">
            {colCount && Array.from(Array(colCount).keys()).map((i) => (<Piece key={i}/>))}
        </div>
    )
};

export default Word;