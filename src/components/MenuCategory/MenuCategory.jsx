import { Link } from "react-router-dom";
import MenuCard from "../../OurMenu/MenuCard";

const MenuCategory = ({items}) => {
    
    return (
      <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {
            items?.map(item=> <MenuCard
            key={item._id}
            item={item}
            ></MenuCard>)
        }
       </div>
      <div className="flex items-center justify-center my-5"> <Link to={`/order`}> <button className="btn btn-outline mt-3 bg-sky-400">Order Now</button></Link></div>
      </div>
    );
};

export default MenuCategory;