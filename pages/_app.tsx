import type { AppProps } from "next/app"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { WordleProvider } from "../components/context/wordle"
import AnswerdleFooter from "../components/ui/footer"

const colors = {}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <WordleProvider>
                <Component {...pageProps} />
                <AnswerdleFooter />
            </WordleProvider>
        </ChakraProvider>
    )
}

export default MyApp
