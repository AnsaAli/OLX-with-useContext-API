import React, { useState } from "react";
import { logo_url } from "../Utilility/Constants";
import { Link } from "react-router-dom";
import { useAuth } from "../Utilility/AuthContext";

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const {currentUser} = useAuth();
  console.log('currentUser', currentUser)

  const toggleDropDown = () => {
    console.log("button clicked");
    setIsDropDown(!isDropDown);
  };
  return (
    <nav className="bg-gray-200 flex  h-20">
      <div className="flex">
        <div className="max-w-screen-xl items-center justify-between mt-1 ml-5 p-4">
          <img className="bg-black w-8" src={logo_url} />
        </div>
        <div className="mt-4 ml-8">
          <div className="">
            <button
             className="text-black bg-white font-medium text-sm px-6 py-4 border border-black rounded-sm text-center inline-flex items-center w-72"
             onClick={toggleDropDown}
             role="button"
             aria-expanded={isDropDown}
             aria-haspopup="true"
            >
              Kerala{" "}
              <svg
               className="w-2.5 h-2.5 ms-3 ml-40"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>

          {/* <!-- Dropdown menu --> */}
          {isDropDown && (
             <ul
             className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
             role="menu"
             aria-orientation="vertical"
           >
             <li>
               <a
                 href="#"
                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 role="menuitem"
               >
                 Dashboard
               </a>
             </li>
             <li>
               <a
                 href="#"
                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 role="menuitem"
               >
                 Settings
               </a>
             </li>
           </ul>
          )}
        </div>
        <div className="mt-4">
          <form>
            <input
              type="search"
              placeholder="search"
              className="text-black bg-white p-3 ml-2 border border-black w-[750px]"
            />
            <button
              type="submit"
              className="p-4 text-sm font-medium text-white bg-black rounded-sm border border-green-700"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="mt-6 ml-2 text-xl flex">
          <p>
            English{" "}
            <svg
              className="w-2.5 h-2.5 ml-20 -mt-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>{" "}
          </p>
        </div>
        <div className="mt-6 ml-3 "> 
        {currentUser ? (
            <span className="text-l font-bold">
               <Link
              className="text-l font-bold text-decoration-line: underline"
              to="/logout"
            >
              Sign Out
            </Link>
            </span>
          ) : (
            <Link
              className="text-xl font-bold text-decoration-line: underline"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
        <div className="mt-5 ml-3 "> 
          <Link to='/sell'>
          <button className="text-xl px-5 pb-2 bg-white rounded-3xl border border-red-800"> <span className="text-2xl font-bold ml-2 mr-2">+</span>Sell</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};    

export default Header;
