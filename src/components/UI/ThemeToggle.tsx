import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="flex items-center gap-2">
            {/* Sun icon (left) */}
            <SunIcon className={`w-6 h-6 transition-colors duration-300 ${!isDarkMode ? 'text-yellow-500' : 'text-gray-400 opacity-60'}`} />
            <button
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                className={`relative w-14 h-8 flex items-center rounded-full transition-colors duration-300 focus:outline-none shadow-md
                    ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-300'}`}
                type="button"
            >
                {/* Thumb */}
                <span
                    className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300
                        ${isDarkMode ? 'translate-x-6 bg-gray-900' : 'translate-x-0 bg-white'}`}
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                />
            </button>
            {/* Moon icon (right) */}
            <MoonIcon className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-yellow-300' : 'text-gray-400 opacity-60'}`} />
        </div>
    );
};

export default ThemeToggle;