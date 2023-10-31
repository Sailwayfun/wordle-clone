import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/Puzzle";
import { PuzzlePiece } from "../src/types";
import Header from "./components/Header";
function App() {
  const dummyWords:PuzzlePiece[][] = [
    [{letter: "W", status: "absent"}, {letter:"A", status:"partial"}, {letter:"T", status:"absent"}, {letter:"E", status:"absent"}, {letter:"R", status:"partial"}],
    [{letter:"A", status:"partial"}, {letter:"F", status:"absent"}, {letter:"T", status:"absent"}, {letter:"E", status:"absent"}, {letter:"R", status:"partial"}],
    [{letter:"B", status:"absent"}, {letter:"R", status:"correct"}, {letter:"A", status:"correct"}, {letter:"I", status:"correct"}, {letter:"L", status:"correct"}],
    [{letter:"G", status:"correct"}, {letter:"R", status:"correct"}, {letter:"A", status:"correct"}, {letter:"I", status:"correct"}, {letter:"L", status:"correct"}],
    [{letter:"", status:"empty"}, {letter:"", status:"empty"}, {letter:"", status:"empty"}, {letter:"", status:"empty"}, {letter:"", status:"empty"}],
    [{letter:"", status:"empty"}, {letter:"", status:"empty"}, {letter:"", status:"empty"}, {letter:"", status:"empty"}, {letter:"", status:"empty"}],
  ];

  return (
    <>
    <Header />
    <Wrapper>
      <Puzzle words={dummyWords}/>
    </Wrapper>
    </>
  );
   
    
}

export default App;
