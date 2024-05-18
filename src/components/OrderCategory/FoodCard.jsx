
const FoodCard = ({item}) => {

    const {name, image, recipe, price} = item;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <h4 className="absolute right-8 top-3 font-semibold w-[70px] bg-black text-white px-4 py-1 rounded-md">${price}</h4>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;