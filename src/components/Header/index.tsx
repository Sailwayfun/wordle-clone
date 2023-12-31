import Heading from "./Heading";
const Header = () => {
    return(
        <header className="w-full h-3 py-6 xl:py-8 flex border-b-2 border-dark-gray items-center justify-center uppercase tracking-widest">
            <Heading text="Wordle 2"/>
        </header>
    );
};

export default Header;