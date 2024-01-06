import Cover from "../../Home/Share/Cover/Cover";
import saladImage from "../../../assets/menu/salad-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SaladItem from "./SaladItem/SaladItem";


const Salad = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === "salad")
    const saladSlice = salad.slice(1)
    // console.log(salad)

    return (
        <div className="my-10">
            <div>
                <Cover image={saladImage} title={'SALADS'} description={'Lorem Ipsum has been the industry’s standard dummy.'}></Cover>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-14">
                {
                    saladSlice.map(item => <SaladItem key={item._id} item={item}></SaladItem>)
                }
            </div>
            <div className="flex justify-center mt-6">
                <button className="btn btn-outline border-0 border-b-4 uppercase">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Salad;