import useToggleLightDark from "../hooks/useToggleLightDark";
import ThemeContext from "./ThemeContext";

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const { isDarkMode, toggleTheme } = useToggleLightDark();

    return (
        <ThemeContext value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext>
    )
}