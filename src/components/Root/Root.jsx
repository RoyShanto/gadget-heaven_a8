
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-base-200">
            <div className="lg:mx-7">
                <Navbar />
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;