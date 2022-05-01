import { format } from "date-fns"
import { isToday } from "date-fns"
import { Answer } from "../types/answer"
import { Game } from "../types/game"

const diffreencedays = (date: Date, startDate: Date): number => {
    // console.log("date:", format(new Date(date), "yyyy-MM-dd"))
    // console.log("startDate:", format(new Date(startDate), "yyyy-MM-dd"))
    return (new Date(date).setHours(0, 0, 0, 0) - new Date(startDate).setHours(0, 0, 0, 0)) / 864e5
}

export const getAnswer = (game: Game, date: Date): Answer => {
    //  get the diff in days
    const diff = diffreencedays(date, game.startDate)

    // console.log("diff:", diff)
    // console.log("wordle:", game.answers.indexOf("forgo"))
    // console.log("wordle2:", game.answers.indexOf("return"))

    if (diff < 0) {
        throw new Error("Date is before start date")
    }
    if (diff >= game.answers.length) {
        throw new Error("Date is after end date")
    }

    switch (game.name) {
        case "Wordle2": {
            // const startDate = new Date(2021, 12, 19, 0, 0, 0, 0)
            // const today = new Date()

            // console.log("today2:", format(today, "yyyy-MM-dd"))
            // console.log("startDate2:", format(startDate, "yyyy-MM-dd"))

            // const dayCount = (today.setHours(0, 0, 0, 0) - startDate.setHours(0, 0, 0, 0)) / 864e5

            // const gameCount = dayCount * 2 + (new Date().getHours() < 12 ? 1 : 2)

            // const index = gameCount % game.answers.length

            // console.log("dayCount:", dayCount)
            // console.log("gameCount:", gameCount)
            // console.log("index:", index)
            // console.log("date", date)
            // console.log("date.getHours():", date.getHours())

            // console.log("new Date()", new Date())
            // console.log("new Date().getHours():", new Date().getHours())

            const gameNum = diff * 2 + (new Date(date).getHours() < 12 ? 1 : 2)
            const indexNum = gameNum % game.answers.length

            // console.log("diff:", diff)

            // console.log("gameNum:", gameNum)
            // console.log("indexNum:", indexNum)

            // console.log(date.getHours() < 12 ? 1 : 2)

            return {
                game: game.name,
                gameNumber: indexNum,
                answer: game.answers[indexNum],
            }
        }
        default: {
            return {
                game: game.name,
                gameNumber: diff + 1,
                answer: game.answers[diff % game.answers.length],
            }
        }
    }
}
