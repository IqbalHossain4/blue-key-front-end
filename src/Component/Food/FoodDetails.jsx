import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
const FoodDetails = () => {
  const foodData = useLoaderData();
  const { id, name, photo, description, rating } = foodData;

  const imge = {
    width: "100%",
    height: "450px",
  };
  return (
    <div className="mt-16 w-full flex items-center justify-center">
      <div className="mx-auto  ">
        <img src={photo} style={imge} alt="" />
        <div className="ms-6 mt-6">
          <p className="flex items-center my-4 text-md font-semibold">
            <ReactStarsRating className="flex items-center " value={rating} />
            {rating}
          </p>
          <h3 className="font-bold mb-4">{name}</h3>
          <p className="text-md font-semibold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
