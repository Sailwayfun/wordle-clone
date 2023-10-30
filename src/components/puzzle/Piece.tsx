interface PieceProps {
    text: string;

}
// const pieceBgColors:bgColors = {
  //   absent: `bg-[#3a3a3c]`,
  //   partial:`bg-[#B49F3A]`,
  //   correct: `bg-[#538d4e]`,
  //   empty:"bg-transparent",
  // };
const Piece = ({text}: PieceProps) => {
    return (
        <div className=" bg-transparent border border-gray-700 aspect-square shadow rounded-sm flex justify-center items-center text-6xl font-bold">
            {text}
        </div>
    )
}

export default Piece;