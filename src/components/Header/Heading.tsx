interface HeadingProps {
    text: string;
}
const Heading = ({text}:HeadingProps) => {
    return (
        <h1 className="text-3xl sm:text-5xl xl:text-8xl text-white font-heading tracking-widest">
            {text}
        </h1>
    );
};

export default Heading;