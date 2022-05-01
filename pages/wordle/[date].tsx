import { Box, Text } from "@chakra-ui/layout"
import { parse } from "date-fns"
import type { GetServerSideProps, NextPage } from "next"
import { Answer } from "../../types/answer"
import { getWordle } from "../../utils/game"
import { getAnswer } from "../../utils/solver"

type Props = {
    answer: Answer
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

const Page = ({ answer }: Props) => {
    return (
        <div>
            <Box>
                <Text>{answer.answer}</Text>
            </Box>
        </div>
    )
}

export default Page
