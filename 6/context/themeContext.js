import { createContext, useContext, useState } from "react";

const themeConfig = {
    light: {
        borderColor: 'darkgreen',
        backgroundColor: 'lightgreen'
    },
    dark: {
        borderColor: 'lightgree',
        backgroundColor: 'darkgreen'
    }
}

const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(themeConfig.light)

    const toggle = () => {
        setTheme((prev) => {
            if(prev === themeConfig.light) {
                return themeConfig.dark
            }
            return themeConfig.light
        })
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider