import { Button } from "@chakra-ui/button"
import { HStack, Spacer, Text } from "@chakra-ui/layout"
import Link from "next/link"
import { useContext } from "react"
import { WordleContext } from "../context/wordle"

type Props = {
    href: string
    title: string
}

const AnswerdleHeader = ({ href, title }: Props) => {
    const { setRevealed } = useContext(WordleContext)
    return (
        <HStack h={"10"} p={"8"}>
            <Link href={href}>
                <Button
                    variant={"link"}
                    onClick={() => {
                        setRevealed(false)
                    }}
                >
                    {title}
                </Button>
            </Link>
            <Spacer />
        </HStack>
    )
}

export default AnswerdleHeader
