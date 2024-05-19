import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {

  const location = useLocation()
    console.log(location)
     const noHeaderFooter = location.pathname.includes("/login")

    return (
        <div className="container mx-auto">
          {noHeaderFooter || <Navbar></Navbar>}
          <Outlet></Outlet>  
        </div>
    );
};

export default MainLayout;