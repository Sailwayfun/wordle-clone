import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/Puzzle";
import Header from "./components/Header";
import { useReducer, Reducer, useEffect } from "react";
import puzzleReducer, { initialState as initialAttempts, State, colCount, rowCount } from "./store/puzzleReducer";
import { Action } from "./store/action";
function App() {
  const answer:string[]=["G", "R", "A", "I", "L"];
  const [state, dispatch] = useReducer<Reducer<State, Action>>(puzzleReducer, initialAttempts);
  const {attempts, currentRow, currentGuess} = state;
  console.log(currentGuess);
  useEffect(() =>{
    function handleKeyUp(e:KeyboardEvent) {
      if(currentRow > rowCount) return;
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        dispatch({type: "ADD_GUESS", payload: e.key.toUpperCase()});
      }
      if(e.key === "Enter" && currentGuess.length === colCount) {
        if(currentRow === rowCount) return;
        const newAttempts = [...attempts];
        newAttempts[currentRow] = currentGuess;
        dispatch({type:"ADD_ATTEMPT", payload: newAttempts});
        dispatch({type:"ADD_ROW"});
      }
    }
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, [currentGuess, currentRow, attempts]);
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
