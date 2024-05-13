import Header from "./header";
import Sidebar from "./sidebar";

const Template = () => {
    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <Header />
            </div>
        </>
    );
};

export default Template;