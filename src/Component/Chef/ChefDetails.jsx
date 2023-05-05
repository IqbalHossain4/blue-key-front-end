import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const ChefDetails = () => {
  const data = useLoaderData();
  const { id, name, photo, years_of_experience, num_of_recipes, likes } = data;

  const [foodse, setFoodse] = useState([]);

  useEffect(() => {
    fetch(`https://myserver-eight.vercel.app/food/${id}`)
      .then((res) => res.json())
      .then((data) => setFoodse(data.foods));
  }, []);

  const someStyle = {
    width: "98%",
    display: "grid",
    gridTemplateColumns: "25% 75%",
    gap: "15px",
  };
  return (
    <div>
      <div style={someStyle} className="mt-16">
        <div className="border ms-4 mx-auto p-3">
          <img src={photo} alt="" />
          <h3 className="font-bold mt-4">Name: {name}</h3>
          <p className="text-md font-semibold">
            Experience: {years_of_experience} Year
          </p>
          <p className="text-md font-semibold">Recipe: {num_of_recipes}</p>
          <p className="text-md font-semibold">Likes: {likes}</p>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          {foodse?.map((food) => (
            <Food food={food} key={food.id}></Food>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
