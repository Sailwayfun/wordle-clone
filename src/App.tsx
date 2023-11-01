import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/Puzzle";
import Header from "./components/Header";
import { useReducer, Reducer, useEffect } from "react";
import puzzleReducer, { initialState as initialAttempts, State } from "./store/puzzleReducer";
import { Action } from "./store/action";
function App() {
  const answer:string[]=["G", "R", "A", "I", "L"];
  const [state, dispatch] = useReducer<Reducer<State, Action>>(puzzleReducer, initialAttempts);
  const {attempts, currentRow, currentGuess} = state;
  console.log(currentGuess);
  useEffect(() =>{
    function handleKeyUp(e:KeyboardEvent) {
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        dispatch({type: "ADD_GUESS", payload: e.key.toUpperCase()});
      }
      if(e.key === "Enter") {
        dispatch({type:"ADD_ATTEMPT"});
        dispatch({type:"ADD_ROW"});
      }
    }
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, []);
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
