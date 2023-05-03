import React from "react";
import { Link } from "react-router-dom";

const ChefCart = ({ chef }) => {
  const { id, name, photo, years_of_experience, num_of_recipes, likes } = chef;
  const imge = {
    width: "100%",
    height: "350px",
  };
  return (
    <div className="mt-16">
      <div className="p-8 border rounded">
        <img src={photo} style={imge} alt="" />
        <div className="mt-4 md:text-left text-center">
          <h3 className="font-bold">{name}</h3>
          <p className="text-md">Experience: {years_of_experience}</p>
          <p className="text-md">Recipe: {num_of_recipes}</p>
          <p className="text-md">Likes: {likes}</p>

          <Link className="w-full rounded font-bold ">
            <button className="text-gray-300 mt-4 hover:bg-gray-700 bg-gray-800 py-2 px-4 rounded w-full">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCart;
