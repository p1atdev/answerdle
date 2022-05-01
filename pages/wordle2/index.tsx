import { Box, Center, Text, VStack } from "@chakra-ui/layout"
import type { GetServerSideProps, NextPage } from "next"
import { Answer } from "../../types/answer"
import WordleButton from "../../components/common/wordle/button"
import WordleText from "../../components/common/wordle/text"
import { getWordle2 } from "../../utils/game"
import { getAnswer } from "../../utils/solver"
import { useContext } from "react"
import { WordleContext } from "../../components/context/wordle"
import AnswerdleTitle from "../../components/ui/title"
import WordleLayout from "../../layout/wordle"
import AnswerdleHeader from "../../components/ui/header"

type Props = {
    answer: Answer
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const today = new Date()

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
        <>
            <WordleLayout title={"ANSWERDLE 2"} answer={answer} link={"https://www.wordhurdle.in/"}>
                <AnswerdleHeader href={"wordle"} title={"ANSWERDLE"} />
            </WordleLayout>
        </>
    )
}

export default Page
