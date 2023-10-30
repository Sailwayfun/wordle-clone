interface PieceProps {
    text: string;
    status: "absent" | "partial" | "correct" | "empty";
}

const Piece = ({text, status}: PieceProps) => {
    const bgColor:string = status === "absent" ? 
    `bg-[#3a3a3c]` : status === "partial" ? 
    `bg-[#B49F3A]` : status === "correct" ? 
    `bg-[#538d4e]` : "bg-transparent";
    return (
        <div className={`${bgColor} border border-gray-700 aspect-square shadow rounded-sm flex justify-center items-center text-6xl font-bold`}>
            {text}
        </div>
    )
}

export default Piece;