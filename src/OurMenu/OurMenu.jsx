
import Titles from "../components/Titles/Titles";
import MenuCard from "./MenuCard";
import useMenu from "../components/Hooks/useMenu";


const OurMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category === "popular")


    return (
        <section className="my-14">
            <Titles
            subTitle={"---Check it out---"}
            title={"FROM OUR MENU"}
            ></Titles>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                popular?.map(item=> <MenuCard
                key={item._id}
                item={item}
                ></MenuCard>)
            }
           </div>
        </section>
    );
};

export default OurMenu;