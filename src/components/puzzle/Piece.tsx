interface PieceProps {
    text: string;
    status: "absent" | "partial" | "correct" | "empty" | "guessing";
}

const Piece = ({text, status}: PieceProps) => {
    const bgColor:string = status === "absent" ?    
    "bg-dark-gray" : status === "partial" ? 
    "bg-bronze" : status === "correct" ? 
    "bg-green" : "bg-transparent";
    const guessingBoder:string = status === "guessing" ? "border-1 border-gray-500" : "";
    return (
        <div className={`${bgColor} border border-gray-700 ${guessingBoder} aspect-square shadow rounded-md flex justify-center items-center text-3xl sm:text-6xl xl:text-8xl font-bold`}>
            {text}
        </div>
    );
}

export default Piece;