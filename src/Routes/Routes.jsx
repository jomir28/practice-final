import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "../MainLayout/DashBoard";
import Cart from "../Pages/Dash/Cart";
import Allusers from "../Pages/Dash/AdminPages/Allusers";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order",
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "cart", 
          element: <Cart></Cart>
        },
        // admin routes
        {
          path:"allusers",
          element:<Allusers></Allusers>
        }
      ]
    },
    
  ]);
