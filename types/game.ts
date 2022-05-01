export type GameJSON = {
    name: "Wordle" | "Wordle2"
    answers: string[]
    startDate: string
}

export type Game = {
    name: "Wordle" | "Wordle2"
    answers: string[]
    startDate: Date
}
