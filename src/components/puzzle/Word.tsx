import Piece from "./Piece";
interface RowProps {
    colCount: number;
    word: string[];
}
const Word = ({colCount, word}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-1">
            {colCount && word.map((piece:string, index:number) => (<Piece key={index} text={piece}/>))}
        </div>
    )
};

export default Word;