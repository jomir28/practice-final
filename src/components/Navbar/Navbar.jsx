import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    
 const navlinks = <>
         <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold  rounded-md px-3 bg-orange-400 text-white hover:bg-blue-500 hover:text-white border-b-4 border-blue-600 border-solid' : 'font-bold hover:bg-sky-200 text-white'}>Home</NavLink></li>
         <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'font-bold  rounded-md px-3 bg-orange-400 text-white hover:bg-blue-500 hover:text-white border-b-4 border-blue-600 border-solid' : 'font-bold hover:bg-sky-200 text-white'}>menu</NavLink></li>
         <li><NavLink to="/order" className={({ isActive }) => isActive ? 'font-bold  rounded-md px-3 bg-orange-400 text-white hover:bg-blue-500 hover:text-white border-b-4 border-blue-600 border-solid' : 'font-bold hover:bg-sky-200 text-white'}>Our Order</NavLink></li>

 </>

    return (
        <div className="navbar rounded-md fixed z-10 bg-black bg-opacity-30  container mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navlinks}
                </ul>
            </div>
            <a className="font-bold text-xl lg:text-2xl">Job Quest Hub </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navlinks}
            </ul>
        </div>

        <div className="navbar-end">


                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-11 rounded-full ">
                                <img  alt="Tailwind CSS Navbar component" src= "https://i.ibb.co/DKvKZqs/user.png" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[5] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ">
                            <li>
                                <a className="justify-between font-semibold">
                                    
                                    <span className="badge font-normal">New</span>
                                </a>
                            </li>
                            <li><a  className="text-[18px] font-bold">Logout</a></li>
                        </ul>
                    </div>
                <Link to="/login"><button className="btn font-bold text-xl">Login</button></Link>

         
        </div>
    </div>
    );
};

export default Navbar;