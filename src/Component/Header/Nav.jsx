import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link as Active, NavLink } from "react-router-dom";
import Banner from "./Banner";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loguts } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    loguts()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const Active = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "underline text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        }
      >
        {children}
      </NavLink>
    );
  };
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex  justify-between w-full">
              <div>
                <h1 className="text-white font-bold text-3xl">BluKey</h1>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Active to="/">Home</Active>

                  <Active to="/blog">Blogs</Active>
                  <Active to="/career">Career</Active>
                  <Active to="/contact">Contact Us</Active>
                  {user ? (
                    <Active>
                      <button className="no-underline" onClick={handleLogout}>
                        LogOut
                      </button>
                    </Active>
                  ) : (
                    <Active to="/login">SignIn</Active>
                  )}

                  {user && (
                    <Active to="">
                      <img
                        title={user?.displayName}
                        className="rounded-full w-12 h-12"
                        src={user?.photoURL}
                        alt=""
                      />
                    </Active>
                  )}
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Active to="/">Home</Active>

                <Active
                  to="/blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blogs
                </Active>
                <Active to="/career">Career</Active>
                <Active to="/contact">Contact Us</Active>

                {user ? (
                  <Active>
                    <button onClick={handleLogout}>LogOut</button>
                  </Active>
                ) : (
                  <Active to="/login">SignIn</Active>
                )}

                {user && (
                  <Active to="/">
                    <img
                      title={user?.displayName}
                      className="rounded-full w-12 h-12"
                      src={user?.photoURL}
                      alt=""
                    />
                  </Active>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
