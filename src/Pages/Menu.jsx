import Cover from "../components/Cover/Cover";
import menuBg from "../assets/menu/banner3.jpg"
import useMenu from "../components/Hooks/useMenu";
import Titles from "../components/Titles/Titles";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import dessertBg from '../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../assets/menu/pizza-bg.jpg'
import saladBg from '../assets/menu/salad-bg.jpg'
import soupBg from '../assets/menu/soup-bg.jpg'



const Menu = () => {
    
    const [menu] = useMenu()
    const dessert = menu.filter(item=> item.category === "dessert")
    const pizza = menu.filter(item=> item.category === "pizza")
    const salad = menu.filter(item=> item.category === "salad")
    const soup = menu.filter(item=> item.category === "soup")
    const offered = menu.filter(item=> item.category === "offered")

    return (
        <div>
            <Cover img={menuBg} title={"our menu"}></Cover>
            <Titles subTitle={"---Don't miss---"} title={"TODAY'S OFFER"}></Titles>
            <MenuCategory items={offered}></MenuCategory>
            <div>
                <Cover title={"DESSERTS"} img={dessertBg}></Cover>
                <MenuCategory items={dessert}></MenuCategory>
            </div>
            <div>
                <Cover title={"PIZZAS"} img={pizzaBg}></Cover>
                <MenuCategory items={pizza}></MenuCategory>
            </div>
            <div>
                <Cover title={"SALAD"} img={saladBg}></Cover>
                <MenuCategory items={salad}></MenuCategory>
            </div>
            <div>
                <Cover title={"SOUPS"} img={pizzaBg}></Cover>
                <MenuCategory items={soup}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;