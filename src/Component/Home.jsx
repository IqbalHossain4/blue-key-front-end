import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Header/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
