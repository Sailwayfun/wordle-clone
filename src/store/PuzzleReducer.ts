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
    switch(action.type) {
        case "ADD_GUESS":
            return state.currentGuess.length < colCount ? 
            { ...state, currentGuess: [...state.currentGuess, action.payload] }: 
            state;
        case "ADD_ROW":
            return {...state, currentRow: state.currentRow + 1}
        case "ADD_ATTEMPT":
            return {...state, attempts: action.payload, currentGuess: []}
        default:
            return state;
    }
}