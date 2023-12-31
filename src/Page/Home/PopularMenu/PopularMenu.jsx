import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularItem from "./PopularItem/PopularItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    // const [popularFilter, setPopularFilter]= useState()
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => item.category === "popular")
                setMenu(filterData)
            })
    }, [])
    // console.log(menu)

    return (
        <section className="my-10">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"OUR POPULAR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 mt-14">
                {
                    menu.map(item => <PopularItem key={item._id} item={item}></PopularItem>)
                }
            </div>
            <div className="flex justify-center mt-6">
                <button className="btn btn-outline uppercase">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;