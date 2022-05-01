import { Button } from "@chakra-ui/button"
import { ComponentProps, ReactNode, useContext, useEffect } from "react"
import { Icon } from "@iconify/react"
import { WordleContext } from "../../context/wordle"
import { motion, useAnimation } from "framer-motion"
import { Box } from "@chakra-ui/layout"
import { delay } from "lodash"
import { transition } from "@chakra-ui/styled-system"

type Props = {
    readonly children: ReactNode | ReactNode[]
} & ComponentProps<"button">

const WordleButton = ({ children, ...props }: Props) => {
    const { revealed, setRevealed } = useContext(WordleContext)

    const control = useAnimation()

    useEffect(() => {
        if (revealed) {
            control.start({
                translateX: [0, -10],
                transition: {
                    ease: "easeInOut",
                    delay: 3.0,
                    duration: 0.5,
                },
            })
        }
    }, [revealed])

    return (
        <>
            <Button {...props} mx={"6"} size={"lg"}>
                {children}
            </Button>

            {revealed && (
                <Box position={"static"}>
                    <motion.div
                        animate={{ opacity: ["0%", "0%", "100%"], visibility: ["hidden", "visible", "visible"] }}
                        transition={{ ease: "easeIn", delay: 2, duration: 0.3 }}
                    >
                        <Button
                            onClick={() => {
                                setRevealed(false)
                            }}
                            autoFocus={true}
                        >
                            <Icon icon={"akar-icons:arrow-counter-clockwise"} />
                        </Button>
                    </motion.div>
                </Box>
            )}
        </>
    )
}

export default WordleButton
