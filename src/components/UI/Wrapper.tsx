interface WrapperProps {
    children: React.ReactNode;
}
const Wrapper = ({children}:WrapperProps) => {
    return (
        <div className="w-4/5 mx-auto mt-5 bg-primary-black p-3 text-white xl:max-w-6xl">
            {children}
        </div>
    )
}

export default Wrapper;