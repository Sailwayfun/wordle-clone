interface HeadingProps {
    text: string;
}
const Heading = ({text}:HeadingProps) => {
    return (
        <h1 className="text-3xl text-white sm:text-5xl xl:text-8xl font-heading tracking-widest pl-10 w-full text-center">
            <span style={{viewTransitionName: "wordle-title"}}>{text}</span>
        </h1>
    );
};

export default Heading;