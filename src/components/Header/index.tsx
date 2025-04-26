import Heading from "./Heading";
import { Link } from "react-router-dom";
import InfoIcon from "../UI/InfoIcon";
import ThemeToggle from "../UI/ThemeToggle";


const Header = () => {
    return(
        <header className="w-full py-4 border-b-2 dark:border-dark-gray border-gray-300 items-center uppercase tracking-widest flex gap-5 pr-10">
            <Heading text="Wordle 2"/>
            <ThemeToggle />
            <Link to="/" viewTransition>
                <span className="dark:text-white text-xl hover:text-bronze transition-colors">
                    <InfoIcon />
                </span>
            </Link>
        </header>
    );
};

export default Header;