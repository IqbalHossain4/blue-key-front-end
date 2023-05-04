import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCart from "./ChefCart";

const Chef = () => {
  const chefData = useLoaderData();

  return (
    <div>
      <h1 className="text-center mt-8 font-bold text-4xl underline">
        TOP CHEF
      </h1>
      <div className="md:grid grid-cols-3 gap-4">
        {chefData.chefs?.map((chefSingle) => {
          return <ChefCart chef={chefSingle} key={chefSingle.id}></ChefCart>;
        })}
      </div>
    </div>
  );
};

export default Chef;
