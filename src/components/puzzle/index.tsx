import Word from "./Word";

interface PuzzleProps {
    words: string[][];
    answer: string[];
}
const Puzzle = ({words, answer}:PuzzleProps) => {
    return (
        <div className="w-full space-y-[10px] sm:space-y-3">
            {words.map((word:string[], index:number) => {
                return (
                <Word key={index} word={word} answer={answer}/>
                );
            })}
        </div>
    );
};

export default Puzzle;