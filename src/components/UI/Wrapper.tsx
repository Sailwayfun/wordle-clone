interface WrapperProps {
    children: React.ReactNode;
}
const Wrapper = ({children}:WrapperProps) => {
    return (
        <div className="w-2/5 mx-auto mt-5 dark:bg-primary-black p-3 dark:text-white xl:max-w-6xl">
            {children}
        </div>
    );
};

export default Wrapper;