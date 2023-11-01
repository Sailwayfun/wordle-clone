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

export interface AddGuessAction {
  type: "ADD_GUESS";
  payload: string[];
}

export interface AddRowAction {
  type: "ADD_ROW";
}

export interface AddAttemptAction {
  type: "ADD_ATTEMPT";
  payload: string[][];
}

export type Action = AddGuessAction | AddRowAction | AddAttemptAction;

export default function puzzleReducer (state:State, action:Action)  {
    switch(action.type) {
        case "ADD_GUESS":
            return {...state, currentGuess: action.payload}
        case "ADD_ROW":
            return {...state, currentRow: state.currentRow + 1}
        case "ADD_ATTEMPT":
            return {...state, attempts: action.payload, currentGuess: []}
        default:
            return state;
    }
}