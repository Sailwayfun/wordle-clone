import Piece from "./Piece";
interface RowProps {
    word: string[];
    answer: string[];
}
const Word = ({word, answer}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-[10px] sm:gap-3">
            {word.map((letter:string, index:number) => {
                return letter === "" ? (
                    <Piece key={index} text="" status="empty" />
                ) : answer[index] === letter ? 
                (<Piece key={index} text={letter} status="correct" />) :
                answer.includes(letter) ? (<Piece key={index} text={letter} status="partial" />) :
                (<Piece key={index} text={letter} status="absent" />)
                })}
        </div>
    );
};

export default Word;