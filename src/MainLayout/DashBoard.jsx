import { FaAd, FaCalendar, FaList, FaPaypal, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex container mx-auto">
            {/* dashboart side bar */}
            <div className="w-48 min-h-screen bg-orange-600">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink to="/dashboard/payment">
                            <FaPaypal></FaPaypal>
                            Payment History</NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add Review</NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink to="/dashboard/booking">
                            <FaList></FaList>
                           My Booking </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;