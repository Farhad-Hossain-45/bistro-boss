import Cover from "../../Home/Share/Cover/Cover";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import PizzaItem from "./PizzaItem/PizzaItem";
import { Link } from "react-router-dom";


const Pizza = () => {
    const [menu] = useMenu()
    const pizza = menu.filter(item => item.category === "pizza")
    const pizzaSlice = pizza.slice(4)
    return (
        <div className="my-10">
            <div>
                <Cover image={pizzaImage} title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy.'}></Cover>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-14">
                {
                    pizzaSlice.map(item => <PizzaItem key={item._id} item={item}></PizzaItem>)
                }
            </div>
            <div className="flex justify-center mt-6">
                <Link to={`/ourShop`}>
                    <button className="btn btn-outline border-0 border-b-4 uppercase">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default Pizza;