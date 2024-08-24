import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="border-t-4  border-t-green-800 p-3  fixed bottom-0 left-0 w-full">
      <div className="flex flex-row">
        <div className=" flex items-center w-2/3">
          <span>@{new Date().getFullYear()}</span>
          <Link to="/login" className="mx-3">
            Deshandri
          </Link>
        </div>
        <div className="flex content-center gap-3 sm:flex-row sm:gap-20 ">
          <a href="https://www.facebook.com/" target="blank">
            <FaFacebook className="text-2xl text-green-500" />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <FaInstagramSquare className="text-2xl text-green-500" />
          </a>
          <a href="https://x.com/i/flow/login" target="blank">
            <FaTwitter className="text-2xl text-green-500" />
          </a>
          <a target="blank">
            <GiSpiderWeb className="text-2xl text-green-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
