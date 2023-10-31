import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/Puzzle";
import Header from "./components/Header";
import { useReducer, Reducer, useEffect } from "react";
import puzzleReducer, { initialState as initialAttempts, State, Action, colCount, rowCount } from "./store/puzzleReducer";
function App() {
  const answer:string[]=["G", "R", "A", "I", "L"];
  const [state, dispatch] = useReducer<Reducer<State, Action>>(puzzleReducer, initialAttempts);
  const {attempts, currentRow, currentGuess} = state;
  console.log(currentGuess);
  useEffect(() =>{
    function handleKeyUp(e:KeyboardEvent) {
      if(currentRow > rowCount) return;
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key) && currentGuess.length < colCount) {
        dispatch({type: "ADD_GUESS", payload: [...currentGuess, e.key.toUpperCase()]});
      }
    }
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, [currentGuess]);
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
