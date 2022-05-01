import type { GetServerSideProps } from "next"
import Head from "next/head"
import AnswerdleHeader from "../../components/ui/header"
import WordleLayout from "../../layout/wordle"
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
        <>
            <Head>
                <title>Answerdle 2</title>
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/wordle2`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="What is today's Wordle answer?" />
                <meta property="og:description" content={`Use Answerdle to "solve" the Wordle!`} />
                {/* <meta property="og:image" content="" /> */}
            </Head>
            <WordleLayout answer={answer} link={"https://www.nytimes.com/games/wordle/index.html"}>
                <AnswerdleHeader href={"wordle2"} title={"ANSWERDLE 2"} />
            </WordleLayout>
        </>
    )
}

export default Page
