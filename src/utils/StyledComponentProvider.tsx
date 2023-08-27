import {ThemeProvider} from "styled-components"
import React from "react"

interface StyleComponentProviderProps {
    children: React.ReactNode
}

const StyledComponentProvider = ({children}: StyleComponentProviderProps) => {
    const theme = {
        infoWhite: "#fff",
        infoBlack: "#000",
        infoGray1: "#f5f5f5",
        infoGray2: "#444",
        infoBlue: "#062990",
        hoverBlue: "#6785db"
    }
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
export default StyledComponentProvider
