const rowCount:number = 6;
const colCount:number = 5;

interface PuzzleState {
    currentGuess:[];
    currentRow:number;
    answer:string[];
    attempts:string[][];
}

const initialState: PuzzleState = {
    answer:["G", "R", "A", "I", "L"],
    currentGuess: [],
    currentRow: 1,
    attempts: Array.from({length: rowCount}, () => Array(colCount).fill("")),
}

interface Action {
    type: string;
    payload: string[];
}

export default function puzzleReducer (state:PuzzleState, action:Action)  {
    switch(action.type) {
        case "ADD_GUESS":
            return {...state, currentGuess: action.payload}
        case "ADD_ROW":
            return {...state, currentRow: state.currentRow + 1}
        case "ADD_ATTEMPT":
            return {...state, attempts: action.payload}
        default:
            return state;
    }
}