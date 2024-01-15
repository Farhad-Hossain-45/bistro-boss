/* eslint-disable react/prop-types */


const ShopItem = ({ item }) => {
    const { name, recipe, image, price } = item || {}
    return (
        <div>
            <div className="card h-[450px] bg-base-100 shadow-xl my-6">
                <div><img  className="h-[200px] w-full" src={image} alt="pizza image" />
                    </div>
                    <h2 className="absolute bg-black text-white px-4 py-1 right-0 mr-4 mt-4">${price}</h2>

                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline text-[#BB8506] uppercase  border-0 border-b-4">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;