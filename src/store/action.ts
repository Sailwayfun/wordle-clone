export interface AddGuessAction {
  type: "ADD_GUESS";
  payload: string;
}

export interface AddRowAction {
  type: "ADD_ROW";
}

export interface AddAttemptAction {
  type: "ADD_ATTEMPT";
}

export type Action = AddGuessAction | AddRowAction | AddAttemptAction;