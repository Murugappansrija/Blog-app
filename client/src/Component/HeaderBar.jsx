import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import { GiHamburger } from "react-icons/gi";

import Home from "../Pages/Home";
import React, { useState } from "react";

const HeaderBar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <React.Fragment>
      <div className="flex justify-between bg-slate-500 p-4">
        <div className="flex items-center">
          <Link to="/">
            <span className="sm:font-semibold px-6 py-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-2xl">
              Dhesandri
            </span>
          </Link>
        </div>
        <form className="flex items-center">
          <input
            className="px-4 py-2  bg-gray-100 rounded hidden sm:inline"
            placeholder="Search..."
          />
        </form>
        <button className="p-3 bg-gray-100 rounded-2xl sm:hidden">
          <AiOutlineSearch />
        </button>
        <div className="flex items-center mt-1 hidden sm:inline">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/project" className="mx-2">Blogs</Link>
          <Link to="/about" className="mx-2">About</Link>
        </div>
        <div className="flex items-center">
          <button className="p-3 bg-gray-100 rounded-2xl mx-2 md:inline hidden sm:inline">
            <BsMoonStars />
          </button>
          <button className="px-4 py-2 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl ">
            <Link to="/login">Log In</Link>
          </button>
          <button className="p-3 bg-gray-100 rounded-2xl mx-2 inline sm:hidden" onClick={handleMenu}>
            <GiHamburger className="font-bold" />
          </button>
        </div>
       
      </div>
      {menu && (
         <div className="flex flex-col items-center bg-slate-100 sm:hidden ">
         <Link to="/" className=" border-t-2 py-2">Home</Link>
         <Link to="/project" className=" border-t-2 py-2">Blogs</Link>
         <Link to="/about" className=" border-t-2 border-b-2 py-2">About</Link>
       </div>
        )}
    </React.Fragment>
  );
};

export default HeaderBar;
