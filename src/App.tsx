import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/Puzzle";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const answer:string[]=["G", "R", "A", "I", "L"];
  const [attempts, setAttempts] = useState<string[][]>([
    ["W", "A", "T", "E", "R"],
    ["A", "F", "T", "E", "R"],
    ["B", "R", "A", "I", "L"],
    ["G", "R", "A", "I", "L"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  return (
    <>
    <Header />
    <Wrapper>
      <Puzzle words={attempts} answer={answer}/>
    </Wrapper>
    </>
  );
   
    
}

export default App;
