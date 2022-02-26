import type { IncomingMessage, ServerResponse } from "http"
import { useQuery } from "h3"
import { WordleAnswer } from "~~/src/types/wordle"

export default async function (req: IncomingMessage) {
    const query = useQuery(req)
    const date = query.date

    const res = await fetch(`https://wordle-solver.deno.dev/answer?date=${date}`, {
        method: "GET",
    })

    const json: WordleAnswer = await res.json()

    // console.log(res)

    return json
}
