import { Children, createContext, ReactNode, useState } from "react"

type InitialContext = {
    revealed: boolean
    setRevealed: (revealed: boolean) => void
}

const initialContext = {
    revealed: false,
} as InitialContext

const WordleContext = createContext(initialContext)

type Props = {
    readonly children: ReactNode | ReactNode[]
}

const WordleProvider = ({ children }: Props) => {
    const [revealed, setRevealed] = useState(false)
    return <WordleContext.Provider value={{ revealed, setRevealed }}>{children}</WordleContext.Provider>
}

export { WordleContext, WordleProvider }
