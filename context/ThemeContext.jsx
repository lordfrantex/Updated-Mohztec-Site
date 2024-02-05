"use client"

import { createContext, useContext, useState } from "react"

const Theme = createContext();

export const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('light')
    return (
        <Theme.Provider value={{ theme, setTheme }}>
            {/* <div className={theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}> */}
            {children}
            {/* </div> */}
        </Theme.Provider>
    )
}

export const useTheme = () => {
    const { theme, setTheme } = useContext(Theme);
    return { theme, setTheme }
}