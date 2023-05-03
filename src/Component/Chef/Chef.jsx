import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChefCart from "./ChefCart";

const Chef = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://myserver-eight.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data.chefs));
  }, []);
  return (
    <div>
      <h1 className="text-center mt-8 font-bold text-4xl underline">
        TOP CHEF
      </h1>
      <div className="md:grid grid-cols-3 gap-4">
        {chefData.map((chefSingle) => {
          return <ChefCart chef={chefSingle} key={chefSingle.id}></ChefCart>;
        })}
      </div>
    </div>
  );
};

export default Chef;
