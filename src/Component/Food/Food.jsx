import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaStarHalfAlt, FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Food = ({ food }) => {
  const notify = () => toast("Added Favorite!!");
  const { id, name, photo, description, rating } = food;
  const imge = {
    width: "100%",
    borderRadius: "5px",
  };
  return (
    <div>
      <div className="p-3 border rounded">
        <img src={photo} style={imge} alt="" />
        <div className="mt-4 md:text-left text-center">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold">Name: {name}</h3>
              <span className="flex items-center">
                <FaStarHalfAlt />
                {rating}
              </span>
            </div>

            <div>
              <p title="Favorite">
                <button onClick={notify}>
                  <FaHeart className="text-red-500" />
                </button>
                <ToastContainer />
              </p>
            </div>
          </div>

          <Link to={`/food/${id}`} className="w-full rounded font-bold ">
            <button className="text-gray-300 mt-4 hover:bg-gray-700 bg-gray-800 py-2 px-4 rounded w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
