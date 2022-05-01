import { Answer } from "../types/answer"
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/layout"
import WordleButton from "../components/common/wordle/button"
import WordleText from "../components/common/wordle/text"
import { ReactNode, useContext } from "react"
import { WordleContext } from "../components/context/wordle"
import AnswerdleTitle from "../components/ui/title"
import { format } from "date-fns"

type Props = {
    readonly children: ReactNode | ReactNode[]
    title?: string
    answer: Answer
    date?: string
}

const WordleLayout = ({ children, title, answer, date = new Date().toString() }: Props) => {
    const { setRevealed } = useContext(WordleContext)

    return (
        <>
            <Box pt={"5"}>
                <Box mb={"10"}>{children}</Box>
                <AnswerdleTitle text={title} />
                <Center opacity={"50"}>
                    <HStack>
                        <Box>
                            <Text>{format(new Date(date), "yyyy-MM-dd")}</Text>
                        </Box>
                        <Box>
                            <Text>No.{answer.gameNumber}</Text>
                        </Box>
                    </HStack>
                </Center>

                <VStack mt={"20"} mb={"40"}>
                    <Center h={"max"} mb={"4"}>
                        <WordleText text={answer.answer} />
                    </Center>

                    <Center>
                        <WordleButton
                            onClick={() => {
                                setRevealed(true)
                            }}
                        >
                            <Text>REVEAL</Text>
                        </WordleButton>
                    </Center>
                </VStack>
            </Box>
        </>
    )
}

export default WordleLayout
