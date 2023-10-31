import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/Puzzle";
import Header from "./components/Header";
import { useReducer, Reducer } from "react";
import puzzleReducer, { initialState as initialAttempts, State, Action, colCount, rowCount } from "./store/puzzleReducer";
function App() {
  const answer:string[]=["G", "R", "A", "I", "L"];
  const [state, dispatch] = useReducer<Reducer<State, Action>>(puzzleReducer, initialAttempts);
  const {attempts, currentRow, currentGuess} = state;
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
