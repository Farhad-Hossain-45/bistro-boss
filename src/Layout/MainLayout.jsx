import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Page/Home/Nabvar/Navbar";
import Footer from "../Page/Home/Share/Footer/Footer";


const MainLayout = () => {
    const location = useLocation()
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                {noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
                {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default MainLayout;