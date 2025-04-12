import type { Action } from "./action";
const rowCount:number = 6;
const colCount:number = 5;
export { colCount, rowCount };
export const answer:string[]=["A", "P", "P", "L", "E"];

// Precalculate answer frequencies
const answerFrequencies: {[key: string]: number} = answer.reduce((freq, letter) => {
    freq[letter] = (freq[letter] || 0) + 1;
    return freq;
}, {} as {[key: string]: number});

export type MatchState = "correct" | "partial" | "absent" | "empty" | "guessing";

export interface State {
    currentGuess: string[];
    currentRow: number;
    attempts: string[][];
    isMatched: boolean;
    isOver: boolean;
    matchStates: MatchState[][];
}

export const initialState: State = {
    currentGuess: [],
    currentRow: 0,
    attempts: Array.from({length: rowCount}, () => Array(colCount).fill("")),
    isMatched: false,
    isOver: false,
    matchStates: Array.from({length: rowCount}, () => Array(colCount).fill("empty")),
}

// Helper function to calculate match states for a guess
function calculateMatchStates(guess: string[]): MatchState[] {
    const currentRowStates = Array(colCount).fill("empty");
    
    if (guess.length === 0) return currentRowStates;
    
    // Copy frequencies for this calculation
    const remainingFreq = {...answerFrequencies};
    
    // First pass: Mark correct matches
    guess.forEach((letter, index) => {
        if (letter === answer[index]) {
            currentRowStates[index] = "correct";
            remainingFreq[letter]--;
        }
    });
    
    // Second pass: Mark partial and absent matches
    guess.forEach((letter, index) => {
        if (currentRowStates[index] === "correct") return;
        
        if (remainingFreq[letter] > 0) {
            currentRowStates[index] = "partial";
            remainingFreq[letter]--;
        } else {
            currentRowStates[index] = "absent";
        }
    });
    
    return currentRowStates;
}

export default function puzzleReducer(state: State, action: Action) {
    const currentGuessLength = state.currentGuess.length;
    const isGuessing = currentGuessLength < colCount;
    const isCurrentRow = currentGuessLength > 0 && currentGuessLength < colCount;
    const isRowFull = state.currentRow === rowCount;
    const isGuessFull = currentGuessLength === colCount;
    const isMatched = isGuessFull && state.currentGuess.join("") === answer.join("");
    const isOver = state.currentRow === rowCount - 1 && !isMatched;
    const canRemoveGuess = currentGuessLength <= colCount && currentGuessLength > 0;

    if(state.currentRow > rowCount) return state;

    switch(action.type) {
        case "ADD_GUESS": {
            if(!isGuessing) return state;
            
            const newGuess = [...state.currentGuess, action.payload];
            const newMatchStates = state.matchStates.map((row, index) => 
                index === state.currentRow ? calculateMatchStates(newGuess) : row
            );
            
            return {
                ...state,
                currentGuess: newGuess,
                matchStates: newMatchStates
            };
        }

        case "REMOVE_GUESS": {
            if(!canRemoveGuess) return state;
            
            const remainingGuess = state.currentGuess.slice(0, -1);
            const newMatchStates = state.matchStates.map((row, index) => 
                index === state.currentRow ? calculateMatchStates(remainingGuess) : row
            );
            
            return {
                ...state,
                currentGuess: remainingGuess,
                matchStates: newMatchStates
            };
        }

        case "ADD_ATTEMPT": {
            if (isRowFull && isGuessFull || isCurrentRow) return state;
            if(isMatched) return {...initialState, isMatched};
            if(isOver) return {...initialState, isOver};
            
            const newAttempts = state.attempts.map((row, index) => 
                index === state.currentRow ? [...state.currentGuess] : row
            );
            
            return {
                ...state,
                attempts: newAttempts,
                currentGuess: [],
                currentRow: state.currentRow + 1
            };
        }

        case "RESET":
            return initialState;

        default:
            return state;
    }
}