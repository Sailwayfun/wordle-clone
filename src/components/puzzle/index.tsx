import Word from "./Word";

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