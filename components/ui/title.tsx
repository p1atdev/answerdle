import { Button } from "@chakra-ui/button"

import { Center, Text } from "@chakra-ui/layout"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { ComponentProps } from "react"

type Props = {
    text?: string
    link?: string
} & ComponentProps<"div">

const AnswerdleTitle = ({ text = "ANSWERDLE", link, ...props }: Props) => {
    return (
        <Center {...props}>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
                {text.toUpperCase()}
            </Text>
            {link && (
                <Link href={link} passHref>
                    <Button mx={"1"} p={"1"} as={"a"} variant={"link"} target={"_blank"} rel={"noopener noreferrer"}>
                        <Icon icon={"heroicons-outline:external-link"} />
                    </Button>
                </Link>
            )}
        </Center>
    )
}

export default AnswerdleTitle
