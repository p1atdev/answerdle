import { Box, Center, HStack, Text, VStack } from "@chakra-ui/layout"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { ComponentProps } from "react"

type Props = {} & ComponentProps<"footer">
const AnswerdleFooter = ({ ...props }: Props) => {
    return (
        <footer {...props}>
            <VStack opacity={"50%"}>
                <HStack>
                    <a href={"https://github.com/p1atdev/answerdle"} target={"_blank"} rel={"noopener noreferrer"}>
                        <HStack>
                            <Icon icon="logos:github-icon" />
                            <Text>p1atdev/answerdle</Text>
                        </HStack>
                    </a>
                    <Box></Box>
                </HStack>
                <Center>
                    <Text>&copy; 2022 p1atdev</Text>
                </Center>
            </VStack>
        </footer>
    )
}

export default AnswerdleFooter
