import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import CallUs from "./CallUs/CallUs";
import Featured from "./Featured/Featured";


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
            <CallUs></CallUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;