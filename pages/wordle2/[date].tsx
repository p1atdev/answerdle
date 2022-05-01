import { Box, Text } from "@chakra-ui/layout"
import { parse } from "date-fns"
import type { GetServerSideProps, NextPage } from "next"
import WordleLayout from "../../layout/wordle"
import { Answer } from "../../types/answer"
import { getWordle2 } from "../../utils/game"
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
                destination: "/wordle2",
            },
            props: {},
        }
    }

    try {
        const date = parse(dateText, "yyyy-MM-dd-HH", new Date())

        const game = getWordle2()

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
                destination: "/wordle2",
            },
            props: {},
        }
    }
}

const Page = ({ answer, date }: Props) => {
    return (
        <WordleLayout answer={answer} date={date}>
            <></>
        </WordleLayout>
    )
}

export default Page
