import Word from "./Word";

interface PuzzleProps {
    words: string[][];
    answer: string[];
}
const Puzzle = ({words, answer}:PuzzleProps) => {
    const colCount:number = 5;
    return (
        <div className="w-full space-y-[10px] sm:space-y-3">
            {words.map((word:string[], index:number) => {
                return (
                <Word key={index} word={word} colCount={colCount} answer={answer}/>
                );
            })}
        </div>
    );
};

export default Puzzle;