import Wrapper from "./components/UI/Wrapper";
import Puzzle from "./components/puzzle";
import Header from "./components/Header";
import { useReducer, useEffect } from "react";
import puzzleReducer, { initialState as initialAttempts } from "./store/PuzzleReducer";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowToPlay from './components/HowToPlay.tsx';

function App() {
  const [state, dispatch] = useReducer(puzzleReducer, initialAttempts);

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
      
      <Router>
        <Routes>
          <Route path="/game" element={
            <>
              <Header />  
              <Wrapper>
                <Puzzle 
                  words={state.attempts}
                  currentGuess={state.currentGuess}
                  currentRow={state.currentRow}
                  matchStates={state.matchStates}
                />
              </Wrapper>
            </>
          } />
          <Route path="/" element={<HowToPlay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
