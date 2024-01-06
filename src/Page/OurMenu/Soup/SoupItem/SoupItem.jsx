

// eslint-disable-next-line react/prop-types
const SoupItem = ({ item }) => {
    const { name, recipe, image, price } = item || {}
    return (
        <div>
            <div>
                <div className="flex ">
                    <div className="flex gap-4 ">
                        <img style={{ borderRadius: "0px 200px 200px 200px" }} className="h-24 w-28" src={image} alt="" />
                        <div>
                            <h2 className="text-lg font-bold">{name}-----------</h2>
                            <p>{recipe}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#BB8506]">${price}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SoupItem;