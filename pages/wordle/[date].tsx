import { Box, Text } from "@chakra-ui/layout"
import { parse } from "date-fns"
import type { GetServerSideProps, NextPage } from "next"
import AnswerdleHeader from "../../components/ui/header"
import WordleLayout from "../../layout/wordle"
import { Answer } from "../../types/answer"
import { getWordle } from "../../utils/game"
import { getAnswer } from "../../utils/solver"

type Props = {
    answer: Answer
    date: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const dateText = context.params?.date as string

    if (!dateText) {
        return {
            redirect: {
                destination: "/wordle",
            },
            props: {},
        }
    }

    try {
        const date = parse(dateText, "yyyy-MM-dd", new Date())

        const game = getWordle()

        const answer = getAnswer(game, date)

        return {
            props: {
                answer: answer,
                date: date.toString(),
            },
        }
    } catch {
        return {
            redirect: {
                destination: "/wordle",
            },
            props: {},
        }
    }
}

const Page = ({ answer, date }: Props) => {
    return (
        <WordleLayout answer={answer} date={date} link={"https://www.nytimes.com/games/wordle/index.html"}>
            <AnswerdleHeader href={"wordle2"} title={"ANSWERDLE 2"} />
        </WordleLayout>
    )
}

export default Page
