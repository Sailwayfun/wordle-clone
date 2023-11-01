import { Action } from "./action";
const rowCount:number = 6;
const colCount:number = 5;
export {colCount, rowCount};

export interface State {
    currentGuess:string[];
    currentRow:number;
    attempts:string[][];
}

export const initialState: State = {
    currentGuess: [],
    currentRow: 0,
    attempts: Array.from({length: rowCount}, () => Array(colCount).fill("")),
}



export default function puzzleReducer (state:State, action:Action)  {
    const isGuessing = state.currentGuess.length < colCount;
    const isCurrentRow = state.currentGuess.length > 0 && state.currentGuess.length < colCount;
    const isRowFull = state.currentRow === rowCount;
    const isGuessFull = state.currentGuess.length === colCount;
    const newAttempts = [...state.attempts];
    newAttempts[state.currentRow] = [...state.currentGuess];
    if(state.currentRow > rowCount) return state;
    switch(action.type) {
        case "ADD_GUESS":
            return isGuessing ? 
            { ...state, currentGuess: [...state.currentGuess, action.payload] }: 
            state;
        case "ADD_ROW":
            return ((isRowFull && isGuessFull) || isCurrentRow) ? state: 
            {...state, currentRow: state.currentRow + 1}
        case "ADD_ATTEMPT":
            return ((isRowFull && isGuessFull) || isCurrentRow) ? state: {...state, attempts: newAttempts, currentGuess: []}
        default:
            return state;
    }
}