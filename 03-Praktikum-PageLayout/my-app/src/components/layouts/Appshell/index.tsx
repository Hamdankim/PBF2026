import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props:AppShellProps) => {
    const {children} = props;
    return (
        <main>
            <Navbar />
            {children}
            <div>
                Footer Component
            </div>
        </main>
    )
}

export default AppShell