import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Home/Share/Cover/Cover";
import OfferItem from "./OfferItem/OfferItem";
import image from "../../../assets/menu/dessert-bg.jpeg"
// import Dessert from "../Dessert/Dessert";


const TodayOffer = () => {
    const [menu] = useMenu()
    const offer = menu.filter(item => item.category === "offered")
    // console.log(offer)
    return (
        <div className="my-10">
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER">

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 mt-14">
                {
                    offer.map(item => <OfferItem key={item._id} item={item}></OfferItem>)
                }
            </div>
            <div className="flex justify-center mt-6">
                <button className="btn btn-outline border-0 border-b-4 uppercase">ORDER YOUR FAVORITE FOOD</button>
            </div>
            <div className="mt-10">
            <Cover image={image} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy. '}></Cover>
            </div>
            {/* <Dessert></Dessert> */}
        </div>
    );
};

export default TodayOffer;