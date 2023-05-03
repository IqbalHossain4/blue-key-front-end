import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Chef = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3450/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      <h1>{chefs.length}</h1>
    </div>
  );
};

export default Chef;
