import { Center, Text } from "@chakra-ui/layout"
import { ComponentProps } from "react"

type Props = {
    text?: string
} & ComponentProps<"div">

const AnswerdleTitle = ({ text = "ANSWERDLE", ...props }: Props) => {
    return (
        <Center {...props}>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
                {text.toUpperCase()}
            </Text>
        </Center>
    )
}

export default AnswerdleTitle
