import {  createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../components/Error/Error";
import Contact from "../Page/Contact/Contact";
import OurMenu from "../Page/OurMenu/OurMenu";
import OurShop from "../Page/OurShop/OurShop";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: "ourMenu",
                element: <OurMenu></OurMenu>
            },
            {
                path: '/ourShop',
                element: <OurShop></OurShop>
            }
        ]
    }
])


export default Router;