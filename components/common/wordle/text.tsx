import { Button } from "@chakra-ui/button"
import { Box, HStack } from "@chakra-ui/layout"
import WordleTile from "./tile"

type Props = {
    text: string
}

const WordleText = ({ text }: Props) => {
    return (
        <Box my={"auto"}>
            <HStack>
                {Array.from(text).map((character, index) => (
                    <WordleTile character={character} at={index} key={index} />
                ))}
            </HStack>
        </Box>
    )
}

export default WordleText
