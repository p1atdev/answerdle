import type { GetServerSideProps } from "next"
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
            <WordleLayout answer={answer}>
                <AnswerdleHeader href={"wordle2"} title={"ANSWERDLE 2"} />
            </WordleLayout>
        </>
    )
}

export default Page
