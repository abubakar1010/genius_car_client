import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar.jsx/NavBar";
import Footer from "../Pages/Shared/Footer.jsx/Footer";

const Root = () => {
    return (
        <div className=" container mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;