import Heading from "./Heading";
import { Link } from "react-router-dom";
import InfoIcon from "../UI/InfoIcon";


const Header = () => {
    return(
        <header className="w-full py-4 border-b-2 border-dark-gray items-center uppercase tracking-widest flex justify-between pr-10">
            <Heading text="Wordle 2"/>
            <Link to="/" viewTransition>
                <span className="text-white text-xl hover:text-bronze transition-colors">
                    <InfoIcon />
                </span>
            </Link>
        </header>
    );
};

export default Header;