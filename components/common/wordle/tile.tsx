import { Box, Text } from "@chakra-ui/layout"
import { useContext } from "react"
import { WordleContext } from "../../context/wordle"
import { motion } from "framer-motion"

type Props = {
    character: string
    at: number
}

const WordleTile = ({ character, at }: Props) => {
    const { revealed } = useContext(WordleContext)

    return (
        <>
            {revealed ? (
                <motion.div
                    animate={{
                        rotateX: [180, 0],
                        backgroundColor: ["#787C7E", "#787C7E", "#6BA964"],
                        color: ["#787C7E", "#787C7E", "#fff"],
                    }}
                    transition={{ type: "keyframes", ease: "easeInOut", duration: 0.375, delay: 0.375 * at }}
                >
                    <Text
                        h={"20"}
                        w={"20"}
                        fontFamily={"sans-serif"}
                        fontSize={["4xl", "5xl"]}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        {character.toUpperCase()}
                    </Text>
                </motion.div>
            ) : (
                <Box h={"20"} w={"20"} bg={"#787C7E"}></Box>
            )}
        </>
    )
}

export default WordleTile
