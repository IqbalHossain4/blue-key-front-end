import React from "react";

const Blogs = () => {
  return (
    <div className="mt-16 ms-8">
      <h1 className="font-bold text-3xl text-center mb-8 underline">Q&A</h1>
      <div className="text-left">
        <h3 className="font-bold">
          1. Differences between uncontrolled and controlled components?
        </h3>
        <p className="font-semibold">
          <span className="font-bold ">Answer: </span>n React, controlled
          components refer to components that have their state and behavior
          controlled by the parent component. These components rely on props
          passed down from the parent component to update their state and
          behavior. Uncontrolled components refer to components that manage
          their own state internally
        </p>
        <hr />
        <h3 className="font-bold mt-4">
          2. How to validate React props using PropTypes?
        </h3>
        <p className="font-semibold">
          <span className="font-bold">Answer: </span>
          <ol>
            <li>PropTypes.any : The prop can be of any data type.</li>
            <li>PropTypes.bool : The prop should be a Boolean</li>
            <li>PropTypes.number : The prop should be a number.</li>
            <li>PropTypes.string : The prop should be a string.</li>
            <li>PropTypes.func : The prop should be a function.</li>
            <li>PropTypes.array : The prop should be an array.</li>
          </ol>
        </p>
        <hr />
        <h3 className="font-bold mt-4">
          3.Difference between nodejs and express js?
        </h3>
        <p className="font-semibold">
          <span className="font-bold">Answer: </span>
          Express is a minimal and flexible node. js web application framework,
          providing a robust set of features for building single and multi-page,
          and hybrid web applications. On the other hand, Node. js is detailed
          as "A platform built on Chrome's JavaScript runtime for easily
          building fast, scalable network applications
        </p>
        <hr />
        <h3 className="font-bold mt-4">
          4. What is a custom hook, and why will you create ?
        </h3>
        <p className="font-semibold">
          <span className="font-bold">Answer: </span>
          Custom React JS hooks are reusable functions that a React JS software
          developer can use to add special and unique functionality to the React
          applications. Usually, if there is a requirement to add a feature, one
          can install a third-party library and solve the problem.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
