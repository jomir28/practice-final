import MenuCard from "../../OurMenu/MenuCard";

const MenuCategory = ({items}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {
            items?.map(item=> <MenuCard
            key={item._id}
            item={item}
            ></MenuCard>)
        }
       </div>
    );
};

export default MenuCategory;