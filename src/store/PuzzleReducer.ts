import type { Action } from "./action";
const rowCount:number = 6;
const colCount:number = 5;
export { colCount, rowCount };
export const answer:string[]=["A", "P", "P", "L", "E"];

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

export default function puzzleReducer(state: State, action: Action) {
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
        case "ADD_GUESS": {
            if(!isGuessing) return state;
            
            const newGuess = [...state.currentGuess, action.payload];
            const newMatchStates = [...state.matchStates];
            const currentRowStates = Array(colCount).fill("empty");
            
            // Calculate letter frequencies in answer
            const answerFreq = answer.reduce((freq: {[key: string]: number}, letter) => {
                freq[letter] = (freq[letter] || 0) + 1;
                return freq;
            }, {});
            
            // First pass: Mark correct matches
            const remainingFreq = {...answerFreq};
            newGuess.forEach((letter, index) => {
                if (letter === answer[index]) {
                    currentRowStates[index] = "correct";
                    remainingFreq[letter]--;
                }
            });
            
            // Second pass: Mark partial and absent matches
            newGuess.forEach((letter, index) => {
                if (currentRowStates[index] === "correct") return;
                
                if (remainingFreq[letter] > 0) {
                    currentRowStates[index] = "partial";
                    remainingFreq[letter]--;
                } else {
                    currentRowStates[index] = "absent";
                }
            });
            
            // Fill remaining positions with "empty"
            for (let i = newGuess.length; i < colCount; i++) {
                currentRowStates[i] = "empty";
            }
            
            newMatchStates[state.currentRow] = currentRowStates;
            
            return {
                ...state,
                currentGuess: newGuess,
                matchStates: newMatchStates
            };
        }

        case "REMOVE_GUESS":
            if(canRemoveGuess) {
                const newMatchStates = [...state.matchStates];
                const currentRowStates = Array(colCount).fill("empty");
                
                // Recalculate states for remaining letters
                const remainingGuess = state.currentGuess.slice(0, -1);
                
                if (remainingGuess.length > 0) {
                    // Calculate letter frequencies in answer
                    const answerFreq = answer.reduce((freq: {[key: string]: number}, letter) => {
                        freq[letter] = (freq[letter] || 0) + 1;
                        return freq;
                    }, {});
                    
                    // First pass: Mark correct matches
                    const remainingFreq = {...answerFreq};
                    remainingGuess.forEach((letter, index) => {
                        if (letter === answer[index]) {
                            currentRowStates[index] = "correct";
                            remainingFreq[letter]--;
                        }
                    });
                    
                    // Second pass: Mark partial and absent matches
                    remainingGuess.forEach((letter, index) => {
                        if (currentRowStates[index] === "correct") return;
                        
                        if (remainingFreq[letter] > 0) {
                            currentRowStates[index] = "partial";
                            remainingFreq[letter]--;
                        } else {
                            currentRowStates[index] = "absent";
                        }
                    });
                }
                
                newMatchStates[state.currentRow] = currentRowStates;
                
                return {
                    ...state,
                    currentGuess: remainingGuess,
                    matchStates: newMatchStates
                };
            }
            return state;

        case "ADD_ATTEMPT":
            if (isRowFull && isGuessFull || isCurrentRow) return state;
            if(isMatched) return {...initialState, isMatched};
            if(isOver) return {...initialState, isOver};
            return {...state, attempts: newAttempts, currentGuess: [], currentRow: state.currentRow + 1};

        case "RESET":
            return initialState;

        default:
            return state;
    }
}