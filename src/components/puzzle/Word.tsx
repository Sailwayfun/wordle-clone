import Piece from "./Piece";interface RowProps {
    colCount: number;
    word: string[];
    answer: string[];
}
const Word = ({colCount, word, answer}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-[10px] sm:gap-3">
            {colCount && word.map((letter:string, index:number) => {
                return answer[index] === letter ? 
                (<Piece key={index} text={letter} status="correct" />) :
                answer.includes(letter) ? (<Piece key={index} text={letter} status="partial" />) :
                (<Piece key={index} text={letter} status="absent" />)
                })}
        </div>
    );
};

export default Word;