import Wrapper from "./components/Wrapper";
import Puzzle from "./components/puzzle";
function App() {
  const dummyWords:string[][] = [
    ["W", "A", "T", "E", "R"],
    ["A", "F", "T", "E", "R"],
    ["B", "R", "A", "I", "L"],
    ["G", "R", "A", "I", "L"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  return (
    <Wrapper>
      <Puzzle words={dummyWords}/>
    </Wrapper>
  )
}

export default App
