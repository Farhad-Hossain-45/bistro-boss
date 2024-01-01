
import featureImage from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="my-10 bg_image md:h-[600px] h-full mt-10 pt-10">
          
            <div className="md:w-1/3 mx-auto">
            <p className="text-[#D99904] text-center mb-3 italic">---Check it out---</p>
            <h2 className=" border-y-2 text-center py-3 text-2xl font-bold text-white">FEATURED ITEM</h2>
        </div>
            <div className="md:flex mt-10 justify-center gap-10 items-center ">
                <div>
                    <img className="w-[400px] h-[300px]" src={featureImage} alt="" />
                </div>
                <div>
                    <h2 className="text-lg font-semibold md:mt-0 mt-5 text-white">March 20, 2023</h2>
                    <h2 className="text-lg font-semibold text-white">WHERE CAN I GET SOME?</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br />voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque <br /> repellat recusandae ad laudantium tempore consequatur <br />consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white uppercase mt-3">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;