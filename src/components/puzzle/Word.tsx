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
                function checkAnswer(letter:string, index:number) {
                    if(isGuessing) return "guessing";
                    if(letter === "") return "empty";
                    if(answer[index] === letter) return "correct";
                    
                    const letterOccurrenceInAnswer:number = answer.reduce((acc, curr) => {
                        if(curr === letter) return acc + 1;
                            return acc;
                        }, 0);
                    const correctGuessTimes:number = word.slice(0, index).reduce((acc, curr) => {
                        if(answer[index] === curr && curr === letter) return acc + 1;
                            return acc;
                        }, 0);
                    const partialGuessTimes:number = word.slice(0, index).reduce((acc, curr) => {
                        if(answer.includes(curr) && answer[index] !== curr && curr === letter) return acc + 1;
                            return acc;
                        }, 0);
                    return (correctGuessTimes + partialGuessTimes < letterOccurrenceInAnswer) ? "partial" : "absent";
                }
                const status = checkAnswer(letter, index);
                return (<Piece key={index} text={letter} status={status}/>)
                })
            }
        </div>
    );
};

export default Word;