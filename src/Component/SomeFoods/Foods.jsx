import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SomeFoodCart from "./SomeFoodCart";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const food = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  };
  useEffect(() => {
    food();
  }, []);
  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-4xl underline">
        POPULAR FOOD COLLECTION
      </h1>
      <div className="md:grid grid-cols-3 gap-4">
        {foods.slice(0, 12).map((single) => (
          <SomeFoodCart meal={single} key={single.idMeal}></SomeFoodCart>
        ))}
      </div>
    </div>
  );
};

export default Foods;
