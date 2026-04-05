import Footer from "../Footer";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

const disableNavbarFooter = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props:AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter();
    return (
        <main>
            {!disableNavbarFooter.includes(pathname) && <Navbar />}
            {children}
            {!disableNavbarFooter.includes(pathname) && <Footer />}
        </main>
    )
}

export default AppShell