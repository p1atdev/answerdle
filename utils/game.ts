import { differenceInDays, parse } from "date-fns"
import fs from "fs"
import path from "path"
import { Game, GameJSON } from "../types/game"

export const getWordle = (): Game => {
    // first read json file
    const jsonPath = path.join(process.cwd(), "static", "wordle.json")
    const json = fs.readFileSync(jsonPath, "utf8")
    const gameJson: GameJSON = JSON.parse(json)

    const game: Game = {
        ...gameJson,
        startDate: parse(gameJson.startDate, "yyyy-MM-dd", new Date()),
    }

    return game
}

export const getWordle2 = (): Game => {
    // first read json file
    const jsonPath = path.join(process.cwd(), "static", "wordle2.json")
    const json = fs.readFileSync(jsonPath, "utf8")
    const gameJson: GameJSON = JSON.parse(json)

    const game: Game = {
        ...gameJson,
        startDate: parse(gameJson.startDate, "yyyy-MM-dd", new Date()),
    }

    return game
}
