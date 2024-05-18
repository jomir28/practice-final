import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";


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
        }
      ]
    },
  ]);