import Piece from "./Piece";
interface RowProps {
    word: string[];
    answer: string[];
    isGuessing:boolean;
}
const Word = ({word, answer, isGuessing}: RowProps) => {
    return (
        <div className="w-full grid grid-cols-5 gap-[10px] sm:gap-3">
            {word.map((letter:string, index:number) => {
                const status = isGuessing ? "guessing" :
                letter === "" ? "empty" : 
                answer[index] === letter ? "correct" : 
                answer.includes(letter) ? "partial" : "absent";
                return (<Piece key={index} text={letter} status={status}/>)
                })
            }
        </div>
    );
};

export default Word;