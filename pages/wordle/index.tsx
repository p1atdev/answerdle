import { Box, Text } from "@chakra-ui/layout"
import type { GetServerSideProps, NextPage } from "next"
import { Answer } from "../../types/answer"
import { getWordle } from "../../utils/game"
import { getAnswer } from "../../utils/solver"

type Props = {
    answer: Answer
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const today = new Date()

    const game = getWordle()

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
