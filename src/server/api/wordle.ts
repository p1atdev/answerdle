import type { IncomingMessage, ServerResponse } from "http"
import { useQuery } from "h3"
import { WordleAnswer } from "~~/src/types/wordle"

export default async function (req: IncomingMessage) {
    try {
        const query = useQuery(req)
        const date = query.date

        const url = "https://wordle-solver.deno.dev/answer"
        // const url = "https://answerdle.onrender.com/api/wordle"

        const res = await fetch(`${url}?date=${date}`, {
            method: "GET",
        })

        const json: WordleAnswer = await res.json()

        // console.log(res)

        return json
    } catch (err) {
        console.log(err)
        return {
            gameNumber: -1,
            answer: "ERROR",
        }
    }
}
