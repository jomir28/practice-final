import { useEffect, useState } from "react";
import Titles from "../components/Titles/Titles";
import MenuCard from "./MenuCard";


const OurMenu = () => {

    const [menu, setMenu] = useState([])
    console.log(menu)

    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=>{
            const popularItem = data.filter(item=> item.category === "popular")
            setMenu(popularItem)
        })
    }, [])


    return (
        <section className="my-14">
            <Titles
            subTitle={"---Check it out---"}
            title={"FROM OUR MENU"}
            ></Titles>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                menu.map(item=> <MenuCard
                key={item._id}
                item={item}
                ></MenuCard>)
            }
           </div>
        </section>
    );
};

export default OurMenu;