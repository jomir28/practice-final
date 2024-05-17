import Featured from "../Featured/Featured";
import OurMenu from "../OurMenu/OurMenu";
import Banner from "../components/Banner/Banner";
import FoodCategory from "../components/FoodCategory/FoodCategory";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FoodCategory></FoodCategory>
           <OurMenu></OurMenu>
           <Featured></Featured>
        </div>
    );
};

export default Home;