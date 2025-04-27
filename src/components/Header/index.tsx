import Heading from "./Heading";
import { Link } from "react-router-dom";
import InfoIcon from "../UI/InfoIcon";
import ThemeToggle from "../UI/ThemeToggle";


const Header = () => {
    return(
        <header className="w-full py-4 border-b-2 dark:border-dark-gray border-gray-300 items-center uppercase tracking-widest flex gap-5 pr-10 relative">
            <Heading text="Wordle 2"/>
            <div className="absolute md:right-4 right-0 flex items-center gap-2">
                <ThemeToggle />
                <Link to="/" viewTransition>
                    <span className="dark:text-white text-xl hover:text-bronze transition-colors">
                    <InfoIcon />
                    </span>
                </Link>
            </div>
        </header>
    );
};

export default Header;