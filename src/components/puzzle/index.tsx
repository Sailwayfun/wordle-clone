import Piece from "./Piece";
const Puzzle = () => {
    return (
        <div className="w-full grid grid-row-6 grid-cols-5 gap-3">
            {Array.from(Array(30).keys()).map((i) => (<Piece key={i}/>))}
        </div>
    )
}

export default Puzzle;