import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chef from "./Component/Chef/Chef.jsx";
import Banner from "./Component/Header/Banner.jsx";
import Home from "./Component/Home.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/",
        element: <h1>Hello</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
