export interface AddGuessAction {
  type: "ADD_GUESS";
  payload: string;
}

export interface RemoveGuessAction {
  type: "REMOVE_GUESS";
}
export interface ResetAction {
  type: "RESET";
}

export interface AddAttemptAction {
  type: "ADD_ATTEMPT";
}

export type Action = AddGuessAction | RemoveGuessAction | AddAttemptAction | ResetAction;