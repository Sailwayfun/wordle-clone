import type { Action } from "./action";
const rowCount:number = 6;
const colCount:number = 5;
export {colCount, rowCount};
export const answer:string[]=["A", "P", "P", "L", "E"];

export interface State {
    currentGuess:string[];
    currentRow:number;
    attempts:string[][];
    isMatched:boolean;
    isOver:boolean;
}

export const initialState: State = {
    currentGuess: [],
    currentRow: 0,
    attempts: Array.from({length: rowCount}, () => Array(colCount).fill("")),
    isMatched: false,
    isOver: false
}



export default function puzzleReducer (state:State, action:Action)  {
    const currentGuessLength = state.currentGuess.length;
    const isGuessing = currentGuessLength < colCount;
    const isCurrentRow = currentGuessLength > 0 && currentGuessLength < colCount;
    const isRowFull = state.currentRow === rowCount;
    const isGuessFull = currentGuessLength === colCount;
    const isMatched = isGuessFull && state.currentGuess.join("") === answer.join("");
    const isOver = state.currentRow === rowCount - 1 && !isMatched;
    const canRemoveGuess = currentGuessLength <= colCount && currentGuessLength > 0;
    const newAttempts = [...state.attempts];
    newAttempts[state.currentRow] = [...state.currentGuess];
    if(state.currentRow > rowCount) return state;
    switch(action.type) {
        case "ADD_GUESS":
            if(isGuessing) {
                return { ...state, currentGuess: [...state.currentGuess, action.payload] };
            }
            return state;
        case "REMOVE_GUESS":
            if(canRemoveGuess) {
                return { ...state, currentGuess: [...state.currentGuess.slice(0, -1)] };
            }
            return state;
        case "ADD_ATTEMPT":
            if (isRowFull && isGuessFull || isCurrentRow) return state;
            if(isMatched) return {...initialState, isMatched};
            if(isOver) return {...initialState, isOver};
            return {...state, attempts: newAttempts, currentGuess: [], currentRow: state.currentRow + 1}
        case "RESET":
            return initialState;
        default:
            return state;
    }
}