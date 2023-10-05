
import { createContext,useState } from "react"


export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("theme")));

    const setTheme = () => {
        setIsDark(prev => !prev);
        localStorage.setItem("theme",JSON.stringify(isDark));
    }

    const values = {
        setTheme,
        isDark
    }
    
    return <ThemeContext.Provider value = {values}>{children}</ThemeContext.Provider>
  
}

export default ThemeContext
