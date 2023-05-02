import React from "react";
import imgs from "../../assets/dd.jpg";

const Banner = () => {
  return (
    <div className="mt-16">
      <div
        className="w-screen h-fit md:p-40 pt-30 h-50 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${imgs})` }}
      >
        <div className="w-96 md:ms-40 mx-auto md:text-left text-center">
          <h1 className="text-white  font-bold md:text-4xl">
            <span className="md:text-7xl text-4xl">
              Good <span className="text-red-600">Food</span>
            </span>
            , <br />
            Good Life
          </h1>
          <p className="text-white mt-4">
            Food Save Life, If YOu have healthy Life I think you are Happiest
            parson in this world. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A, dicta.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
