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
import Head from "next/head"

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
            <Head>
                <title>Answerdle</title>
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/wordle`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="What is today's Wordle answer?" />
                <meta property="og:description" content={`Use Answerdle to "solve" the Wordle!`} />
                {/* <meta property="og:image" content="" /> */}
            </Head>
            <WordleLayout title={"ANSWERDLE 2"} answer={answer} link={"https://www.wordhurdle.in/"}>
                <AnswerdleHeader href={"wordle"} title={"ANSWERDLE"} />
            </WordleLayout>
        </>
    )
}

export default Page
