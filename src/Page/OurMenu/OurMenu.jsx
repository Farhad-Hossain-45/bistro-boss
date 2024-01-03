import { Helmet } from "react-helmet";
import Cover from "../Home/Share/Cover/Cover";
import menuImage from "../../assets/menu/banner3.jpg"


const OurMenu = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>BISTRO BOSS | OUR MENU</title>
                    {/* <link rel="canonical" href="/src/assets/menu_1046849.png" /> */}
                </Helmet>
            </div>
            <Cover image={menuImage} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default OurMenu;