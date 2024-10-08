import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import { GiHamburger } from "react-icons/gi";

// import Home from "../Pages/Home";
import React, { useState } from "react";

const HeaderBar = () => {
  const [menu, setMenu] = useState(false);
  const path = useLocation().pathname;
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <React.Fragment>
      <div className="flex justify-between  p-4 border-b-2">
        <div className="flex items-center">
          <Link to="/">
            <span className=" text-white sm:font-semibold px-6 py-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-md">
              Dhesandri
            </span>
          </Link>
        </div>
        <form className="flex items-center">
          <input
            className="px-4 py-2  bg-gray-100 rounded hidden sm:inline border-2 border-indigo-400 "
            placeholder="Search..."
          />
        </form>
        <button className="p-3 bg-gray-100 rounded-md sm:hidden">
          <AiOutlineSearch />
        </button>
        <div className="flex items-center mt-1 hidden sm:inline">
          <Link
            to="/"
            className={`m-2 ${
              path === "/"
                ? "px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/project"
            className={`m-2 ${
              path === "/project"
                ? "px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md px-2 py-1"
                : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className={`m-2 ${
              path === "/about"
                ? "px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
                : ""
            }`}
          >
            About
          </Link>
        </div>
        <div className="flex items-center">
          <button className="p-3 bg-gray-100 rounded-md mx-2 md:inline hidden sm:inline border-2 border-indigo-400 ">
            <BsMoonStars />
          </button>
          <button className="px-4 py-2 mx-2  bg-gray-100 rounded-md border-2 border-indigo-400 ">
            <Link to="/login">Log In</Link>
          </button>
          <button
            className="p-3 bg-gray-100 rounded-md mx-2 inline sm:hidden "
            onClick={handleMenu}
          >
            <GiHamburger className="font-bold" />
          </button>
        </div>
      </div>
      {menu && (
        <div className="flex flex-col items-center bg-slate-100 sm:hidden ">
          <Link
            to="/"
            className={`m-2 ${
              path === "/"
                ? "px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/project"
            className={`m-2 ${
              path === "/project"
                ? "px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md px-2 py-1"
                : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className={`m-2 ${
              path === "/about"
                ? "px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
                : ""
            }`}
          >
            About
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default HeaderBar;
