/* eslint-disable react/prop-types */
import ShopItem from "../ShopItem/ShopItem";


const ShopTap = ({ item }) => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                item.map(item => <ShopItem key={item._id} item={item}></ShopItem>)
            }
        </div>
    );
};

export default ShopTap;