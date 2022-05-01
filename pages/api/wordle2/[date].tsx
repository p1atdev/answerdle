import { NextApiRequest as Req, NextApiResponse as Res } from "next"
import { parse } from "date-fns"
import { getWordle2 } from "../../../utils/game"
import { getAnswer } from "../../../utils/solver"

const handler = async (req: Req, res: Res) => {
    try {
        const { date } = req.query

        if (!date) {
            res.status(400).json({
                error: "date is required",
            })
            return
        }

        if (typeof date !== "string") {
            res.status(400).json({
                error: "date must be a string",
            })
            return
        }

        const dateObj = parse(date, "yyyy-MM-dd", new Date())

        const game = getWordle2()

        const answer = getAnswer(game, dateObj)

        res.status(200).json(answer)
    } catch {
        res.status(500).json({
            error: "something went wrong",
        })
    }
}

export default handler
