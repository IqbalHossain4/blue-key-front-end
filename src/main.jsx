import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chef from "./Component/Chef/Chef.jsx";
import ChefDetails from "./Component/Chef/ChefDetails.jsx";
import FoodDetails from "./Component/Food/FoodDetails.jsx";
import Home from "./Component/Home.jsx";
import "./index.css";
import Wrapper from "./Wrapper.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Wrapper />,
        children: [
          {
            path: "/",
            element: <Chef />,
            loader: () => fetch("https://myserver-eight.vercel.app/chef"),
          },
        ],
      },

      {
        path: "chef/:id",
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`https://myserver-eight.vercel.app/chef/${params.id}`),
      },
      {
        path: "food/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`https://myserver-eight.vercel.app/details/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
