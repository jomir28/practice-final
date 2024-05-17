import Titles from "../components/Titles/Titles";
import featuredImg from '../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-bg pt-5 pb-20 my-10">
            <Titles 
            subTitle={"---Check it out---"}
            title={'FROM OUR MENU'}
            ></Titles>
            <div className="flex items-center justify-center gap-12 px-20 ">
               <div className="w-1/2">
               <img className="h-[200px] w-full pl-20" src={featuredImg} alt="" />
               </div>
                <div className="w-1/2 text-white">
                    <h3 className="text-2xl">March 20, 2023</h3>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur harum repudiandae modi ea minus commodi sit, animi provident fuga? Placeat numquam nobis minus nulla quam quaerat iure debitis quis veniam!</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;