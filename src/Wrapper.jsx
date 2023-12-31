import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Component/Header/Banner";
import Foods from "./Component/SomeFoods/Foods";

const Wrapper = () => {
  return (
    <div>
      <Banner />
      <Foods />
      <Outlet></Outlet>
    </div>
  );
};

export default Wrapper;
