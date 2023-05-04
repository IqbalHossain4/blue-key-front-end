import { updateProfile } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const { user, createUser } = useContext(AuthContext);
  const [emails, setEmails] = useState();
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const myPhoto = event.target.myImage.value;
    createUser(email, password, name, myPhoto)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: myPhoto,
        })
          .then(() => {
            console.log("Name added");
          })
          .catch((error) => {
            console.log(error.message);
          });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const emai = (e) => {
    setEmails(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl underline mt-16">
        Please SignUp
      </h1>
      <div
        style={{
          height: "calc(100vh - 400px)",
          width: "500px",
          margin: "0 auto",
          marginTop: "40px",
        }}
        className="border rounded flex items-center justify-center mt-16 drop-shadow-2xl"
      >
        <form onSubmit={handleSignUp}>
          <div>
            <p className="font-semibold">Name:</p>
            <input
              className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="text"
              placeholder="Your Name"
              name="name"
              id=""
            />
          </div>

          <div className="mt-4">
            <p className="font-semibold">Email:</p>
            <input
              className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="email"
              placeholder="Email Please"
              name="email"
              id=""
              value={emails}
              onChange={emai}
            />
          </div>

          <div className="mt-4">
            <p className="font-semibold">Password:</p>
            <input
              className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="password"
              placeholder="Password"
              name="password"
              id=""
            />
          </div>
          <input
            className="mt-4"
            type="file"
            name="myImage"
            accept="image/png, image/gif, image/jpeg"
          />
          <input
            className="bg-gray-800 hover:bg-gray-700 text-center w-full mt-4 py-2 rounded text-white font-bold"
            type="submit"
            value="SignUp"
          />
          <Link to="/login" className="text-teal-600 mt-">
            SignIn
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
