import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AddProductDetails from "./AddProductDetails";
import SignOut from "../Utilility/SignOut";
import Sell from "./Sell";
import ShowProdutcs from "./ShowProdutcs";

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <SignOut />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <AddProductDetails />,
  },
  {
    path: "/sell",
    element: <Sell/>,
  },
  {
    path: '/showProduct/:productId',
    element: <ShowProdutcs/>
  }
]);

const Body = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
