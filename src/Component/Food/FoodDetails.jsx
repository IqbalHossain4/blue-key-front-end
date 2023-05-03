import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const foodData = useLoaderData();
  const { id, name, photo, description, rating } = foodData;

  const imge = {
    width: "100%",
    height: "450px",
  };
  return (
    <div className="mt-16 w-full flex items-center justify-center">
      <div className="mx-auto">
        <img src={photo} style={imge} alt="" />
        <p>{rating}</p>
        <h3 className="font-bold">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
