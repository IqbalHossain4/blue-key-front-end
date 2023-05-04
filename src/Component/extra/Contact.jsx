import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center mt-8 font-bold text-3xl underline">
        Contact Us
      </h1>
      <div className="flex items-center justify-center mt-16">
        <div className="w-auto p-7 px-16 border font-semibold  rounded">
          <div className="mb-4">
            <p>Name:</p>
            <input
              type="text"
              className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Your Name"
              name=""
              id=""
            />
          </div>
          <div className="flex gap-4 ">
            <div>
              <p>Email:</p>
              <input
                className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="email"
                placeholder="Email please"
                name=""
                id=""
              />
            </div>
            <div>
              <p>Password:</p>
              <input
                className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="password"
                placeholder="Password"
                name=""
                id=""
              />
            </div>
          </div>
          <p className="mt-4">Message:</p>
          <textarea
            className="mt-2 py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            name=""
            placeholder="Write Your Message"
            id=""
          ></textarea>
          <button className="bg-gray-800 hover:bg-gray-700 text-center w-full mt-4 py-2 rounded text-white font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
