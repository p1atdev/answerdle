import type { AppProps } from "next/app"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { WordleProvider } from "../components/context/wordle"

const colors = {}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <WordleProvider>
                <Component {...pageProps} />
            </WordleProvider>
        </ChakraProvider>
    )
}

export default MyApp
