import Cover from "../../Home/Share/Cover/Cover";
import soupImage from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SoupItem from "./SoupItem/SoupItem";



const Soup = () => {
    const [menu] = useMenu()
    const soup = menu.filter(item => item.category === "soup")
    const soupSlice = soup.slice(5)
    return (
        <div className="my-10">
            <div>
                <Cover image={soupImage} title={'SOUPS'} description={'Lorem Ipsum has been the industry’s standard dummy.'}></Cover>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-14">
                {
                    soupSlice.map(item => <SoupItem key={item._id} item={item}></SoupItem>)
                }
            </div>
            <div className="flex justify-center mt-6">
                <button className="btn btn-outline border-0 border-b-4 uppercase">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Soup;