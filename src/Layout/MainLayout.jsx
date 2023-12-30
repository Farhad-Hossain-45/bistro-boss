import { Outlet } from "react-router-dom";
import Navbar from "../Page/Home/Nabvar/Navbar";
import Footer from "../Page/Home/Share/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;