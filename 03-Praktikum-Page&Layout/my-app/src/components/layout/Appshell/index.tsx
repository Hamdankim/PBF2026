import Navbar from "../Navbar";
import Footer from "../Footer";

type AppshellProps = {
    children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
    const { children } = props;
    return (
        <main>
            <Navbar />
            {children}
            <br />
            <Footer />
        </main>
    );
};

export default Appshell;