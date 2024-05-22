import { FaAd, FaBars, FaCalendar, FaHome, FaList, FaPaypal, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

    const isAdmin = true;

    return (
        <div className="flex container mx-auto">
            {/* dashboart side bar */}
            <div className="w-48 min-h-screen bg-orange-600">
                <ul className="menu">
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to="/dashboard/adminhome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/additems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li className="mt-2">
                                <NavLink to="/dashboard/menegeitems">
                                    <FaList></FaList>
                                    Menege Items</NavLink>
                            </li>
                            <li className="mt-2">
                                <NavLink to="/dashboard/menegebookings">
                                    <FaShoppingCart></FaShoppingCart>
                                    Menege Bookings</NavLink>
                            </li>
                            <li className="mt-2">
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                         
                        </> :
                            <>

                                <li>
                                    <NavLink to="/dashboard/userhome">
                                        <FaCalendar></FaCalendar>
                                        User Home</NavLink>
                                </li>
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
                            </>
                    }
                    <div className="divider"></div>
                    <li className="mt-2">
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home </NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink to="/menu">
                            <FaBars></FaBars>
                            Our Menu </NavLink>
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