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

const Puzzle = () => {
    const rowCount:number = 6;
    const colCount:number = 5;
    return (
        <div className="w-full space-y-1">
            {Array.from(Array(rowCount).keys()).map((i) => (<Word key={i} colCount={colCount}/>))}
        </div>
    )
};

export default Puzzle;