import Heading from "./Heading";
const Header = () => {
    return(
        <header className="w-full p-8 xl:p-12 flex border-b-2 border-dark-gray items-center justify-center uppercase tracking-widest">
            <Heading text="Wordle 2"/>
        </header>
    );
};

export default Header;