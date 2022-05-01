import { Box, Text } from "@chakra-ui/layout"
import type { GetServerSideProps, NextPage } from "next"
import { Answer } from "../../types/answer"
import { getWordle2 } from "../../utils/game"
import { getAnswer } from "../../utils/solver"

type Props = {
    answer: Answer
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const today = new Date()

    console.log("today", today)
    console.log("today.getHours()", today.getHours())

    const game = getWordle2()

    const answer = getAnswer(game, today)

    return {
        props: {
            answer: answer,
        },
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
