import React from "react";
import { Outlet } from "react-router-dom";
import Chef from "./Component/Chef/Chef";
import Banner from "./Component/Header/Banner";

const Wrapper = () => {
  return (
    <div>
      <Banner />
      <Outlet></Outlet>
    </div>
  );
};

export default Wrapper;
