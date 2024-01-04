import useMenu from "../../../hooks/useMenu";
import DessertItem from "./DessertItem/DessertItem";


const Dessert = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=>item.category === 'dessert')
    // console.log(dessert.slice(8))
    const dessertSlice = dessert.slice(8)
    return (
        <div className="grid md:grid-cols-2 gap-8 mt-14">
            {
                dessertSlice.map(item=> <DessertItem key={item._id} item={item}></DessertItem>)
            }
        </div>
    );
};

export default Dessert;