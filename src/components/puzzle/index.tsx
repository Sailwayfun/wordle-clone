import Word from "./Word";

interface PuzzleProps {
    words: string[][];
}
const Puzzle = ({words}:PuzzleProps) => {
    const colCount:number = 5;
    return (
        <div className="w-full space-y-1">
            {words.map((word:string[], index:number) => {
                return <Word key={index} word={word} colCount={colCount}/>
            })}
        </div>
    )
};

export default Puzzle;