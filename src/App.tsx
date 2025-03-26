import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/Puzzle";
import Header from "./components/Header";
import { useReducer, type Reducer, useEffect } from "react";
import puzzleReducer, { initialState as initialAttempts, type State } from "./store/puzzleReducer";
import type { Action } from "./store/action";
import { answer } from "./store/puzzleReducer";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(puzzleReducer, initialAttempts);
  useEffect(() => {
    if(state.isMatched) {
      dispatch({type:"RESET"});
      toast.custom((t) => (
        <div className={`bg-gray-50 px-6 py-6 shadow-md rounded-3xl text-2xl ${
      t.visible ? 'animate-enter' : 'animate-leave'}`}>
          👏<span className="px-3">答對了，恭喜!</span>👏
        </div>
      ));
    }
  }, [state.isMatched]);
  useEffect(() => {
    if(state.isOver) {
      dispatch({type:"RESET"});
      toast.custom((t) => (
        <div className={`bg-gray-50 px-6 py-6 shadow-md rounded-3xl text-2xl ${
      t.visible ? 'animate-enter' : 'animate-leave'}`}>
          😖<span className="px-3">答錯了! 再挑戰一次！</span>😖
        </div>
      ));
    }
  }, [state.isOver]);
  useEffect(() =>{
    function handleKeyUp(e:KeyboardEvent) {
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        dispatch({type: "ADD_GUESS", payload: e.key.toUpperCase()});
      }
      if(e.key === "Enter") {
        dispatch({type:"ADD_ATTEMPT"});
      }
      if(e.key === "Backspace") {
        dispatch({type:"REMOVE_GUESS"});
      }
    }
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, []);
  return (
    <>
      <Toaster toastOptions={{duration: 200}}/>
      <Header />
      <Wrapper>
        <Puzzle words={state.attempts} answer={answer} currentGuess={state.currentGuess} currentRow={state.currentRow}/>
      </Wrapper>
    </>
  );
   
    
}

export default App;
