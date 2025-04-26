import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`relative w-20 h-8 flex items-center rounded-full transition-colors duration-300 focus:outline-none shadow-md
                ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-300'}`}
            type="button"
        >
            {/* Track */}
            <span
                className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300
                    ${isDarkMode ? 'translate-x-10 bg-gray-900' : 'translate-x-0 bg-white'}`}
            >
                {isDarkMode ? (
                    <span className="text-yellow-300 text-lg">🌙</span>
                ) : (
                    <span className="text-yellow-500 text-lg">🌞</span>
                )}
            </span>
            {/* Sun and Moon icons on track */}
            <span className="absolute left-2 text-yellow-500 text-base pointer-events-none select-none">🌞</span>
            <span className="absolute right-2 text-gray-300 text-base pointer-events-none select-none">🌙</span>
        </button>
    );
}

export default ThemeToggle;