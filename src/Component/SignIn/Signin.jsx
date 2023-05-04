import React from "react";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Signin = () => {
  const { user, signIn, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;

        form.reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        console.log(displayName, email, photoURL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl underline mt-16">
        Please SignIn
      </h1>
      <div
        style={{
          height: "calc(100vh - 400px)",
          width: "500px",
          margin: "0 auto",
          marginTop: "40px",
        }}
        className="border pt-28 rounded p-8 mt-16 drop-shadow-2xl"
      >
        <form onSubmit={handleSignIn}>
          <div>
            <p className="font-semibold">Email:</p>
            <input
              className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="email"
              placeholder="Email Please"
              name="email"
              id=""
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
            className="bg-gray-800 hover:bg-gray-700 text-center w-full mt-4 py-2 rounded text-white font-bold"
            type="submit"
            value="SignIn"
          />
          <Link to="/signUp" className="text-teal-600">
            Create New Account
          </Link>
        </form>
        <button onClick={handleGoogle} className="w-12">
          <img
            src={
              "https://freepngimg.com/download/google/66903-google-pay-gboard-platform-logo-cloud.png"
            }
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Signin;
