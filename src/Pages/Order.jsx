import Cover from "../components/Cover/Cover";
import orderBg from '../assets/shop/banner2.jpg'
import OrderCategory from "../components/OrderCategory/OrderCategory";
const Order = () => {
    return (
        <div>
           <Cover img={orderBg} title={"our shop"}></Cover>
           <OrderCategory></OrderCategory>
        </div>
    );
};

export default Order;