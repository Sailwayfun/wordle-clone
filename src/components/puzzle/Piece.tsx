interface PieceProps {
    text: string;

}
const Piece = ({text}: PieceProps) => {
    return (
        <div className=" bg-transparent border border-gray-700 aspect-square shadow rounded-sm flex justify-center items-center text-6xl font-bold">
            {text}
        </div>
    )
}

export default Piece;