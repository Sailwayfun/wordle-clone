interface WrapperProps {
    children: React.ReactNode;
}
const Wrapper = ({children}:WrapperProps) => {
    return (
        <div className="w-4/5 mx-auto mt-5 bg-[#121213] p-2 text-white xl:max-w-6xl">
            {children}
        </div>
    )
}

export default Wrapper;