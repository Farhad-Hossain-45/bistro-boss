import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>BISTRO BOSS | HOME</title>
                    
                </Helmet>
            </div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;