import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Chef = lazy(() => import("./Component/Chef/Chef.jsx"));
const ChefDetails = lazy(() => import("./Component/Chef/ChefDetails.jsx"));
const FoodDetails = lazy(() => import("./Component/Food/FoodDetails.jsx"));
import Home from "./Component/Home.jsx";
import PriveteRoute from "./Component/PriveteRouter/PriveteRoute.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Signin from "./Component/SignIn/Signin.jsx";
import SignUp from "./Component/SignIn/SignUp.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import "./index.css";
import Wrapper from "./Wrapper.jsx";
import Blogs from "./Component/Blogs/Blogs.jsx";
import Career from "./Component/extra/Career.jsx";
import Contact from "./Component/extra/Contact.jsx";
import LoadingSpinner from "./Component/loader/LoadingSpinner.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Wrapper />,

        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <Chef />
              </Suspense>
            ),
            loader: () => fetch("https://myserver-eight.vercel.app/chef"),
          },
        ],
      },
      {
        path: "login",
        element: <Signin />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },

      {
        path: "chef/:id",
        element: (
          <PriveteRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <ChefDetails />
            </Suspense>
          </PriveteRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://myserver-eight.vercel.app/chef/${params.id}`),
      },
      {
        path: "food/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FoodDetails />
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(`https://myserver-eight.vercel.app/details/${params.id}`),
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
