/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import ContextTheme from "../context/ContextTheme";
function Footer() {
  const { isDarkTheme } = useContext(ContextTheme);
  return (
    <footer
      className={`${
        isDarkTheme ? "bg-gray-900" : "bg-slate-200"
      } rounded-lg shadow`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to={"/"} className="flex items-center mb-4 sm:mb-0">
            <img
              src="../../src/assets/letter-n.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              Nelson Hernandez
            </span>
          </Link>
          <ul
            className={`flex flex-wrap items-center mb-6 text-sm font-medium ${
              isDarkTheme ? "text-gray-400" : "text-gray-800"
            } sm:mb-0`}
          >
            <li className="mx-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr
          className={`my-6 ${
            isDarkTheme ? "border-gray-200" : "border-gray-700"
          } sm:mx-auto lg:my-8`}
        />
        <span
          className={`block text-sm ${
            isDarkTheme ? "text-gray-400" : "text-gray-600"
          } sm:text-center`}
        >
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Nelson Hernandez
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
