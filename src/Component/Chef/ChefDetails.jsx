import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const ChefDetails = () => {
  const data = useLoaderData();
  const { id, name, photo, years_of_experience } = data;

  const [foodse, setFoodse] = useState([]);

  useEffect(() => {
    fetch(`https://myserver-hofczrace-iqbalhossain4.vercel.app/food/${id}`)
      .then((res) => res.json())
      .then((data) => setFoodse(data.foods));
  }, []);

  const someStyle = {
    display: "grid",
    gridTemplateColumns: "25% 75%",
    gap: "25px",
  };
  return (
    <div>
      <div style={someStyle} className="mt-16">
        <div className="border ms-10 mx-auto p-3">
          <img src={photo} alt="" />
          <h3 className="font-bold mt-4">Name: {name}</h3>
          <p className="text-md">Experience: {years_of_experience}</p>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          {foodse.map((food) => (
            <Food food={food} key={food.id}></Food>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
