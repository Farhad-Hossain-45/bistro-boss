import { Helmet } from "react-helmet";
import Cover from "../Home/Share/Cover/Cover";
import shopImage from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";

import ShopTap from "./ShopTap/ShopTap";


const OurShop = () => {
    const [menu] = useMenu()
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const dessert = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <div>
                <Helmet>
                    <title>BISTRO BOSS | OUR SHOP</title>
                    {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
                </Helmet>
            </div>
            <div>
                <Cover image={shopImage} title={'OUR SHOP'} description={'Would you like to try a dish?'}></Cover>
            </div>
            <div className="mt-6 text-center">
                <Tabs>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                            <ShopTap item={salad}></ShopTap>
                    </TabPanel>
                    <TabPanel>
                        <ShopTap item={pizza}></ShopTap>
                    </TabPanel>
                    <TabPanel>
                        <ShopTap item={soup}></ShopTap>
                    </TabPanel>
                    <TabPanel>
                        <ShopTap item={dessert}></ShopTap>
                    </TabPanel>
                    <TabPanel>
                        <ShopTap item={drinks}></ShopTap>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;