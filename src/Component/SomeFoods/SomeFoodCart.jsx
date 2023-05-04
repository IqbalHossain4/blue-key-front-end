import React from "react";

const imge = {
  width: "100%",
};
const SomeFoodCart = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="mt-16">
      <div className="p-8 border rounded">
        <img src={strMealThumb} style={imge} alt="" />
        <div className="mt-4 md:text-left text-center">
          <h2 className="font-bold text-3xl">{strMeal}</h2>
        </div>
      </div>
    </div>
  );
};

export default SomeFoodCart;
