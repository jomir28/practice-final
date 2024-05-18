


const MenuCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div>
            <div className="flex items-center justify-center gap-5">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
                <div>
                    <h3 className="font-semibold text-2xl">{name}</h3>
                    <p>{recipe}</p>
                </div>
                <p className="font-semibold text-yellow-500">${price}</p>
            </div>
           
        </div>
    );
};

export default MenuCard;