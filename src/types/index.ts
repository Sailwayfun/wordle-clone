 export type PuzzlePiece = {
    letter: string,
    status: "absent" | "partial" | "correct" | "empty",
}