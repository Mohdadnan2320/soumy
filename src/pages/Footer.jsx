// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { CiPhone } from "react-icons/ci";
// import { MdAlternateEmail } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-full p-5  flex justify-between items-center xl:justify-around ">
      <div>
        <h2 className="lg:text-lg text-lightGrayColor font-SequelSansMedium">Contact</h2>
      </div>
      <div className="w-16 flex justify-evenly items-center">
        <div className="w-5">
          <FaBehance className="w-full h-full" />
        </div>
        <div className="w-5">
          <FaInstagram className="w-full h-full" />
        </div>
      </div>
      <div className="hidden lg:block">
        <h4 className="lg:text-lg text-lightGrayColor  font-SequelSansMedium">Copyright © 2024 Soumy Sharma</h4>
      </div>
      {/* <div>
        <h3 className="text-sm font-SequelSansMedium">Soumy Sharma</h3>
      </div>
      <div className="flex space-x-2">
        <div className="w-5">
          <CiPhone className="w-full h-full" />
        </div>
        <span className="text-sm font-SequelSansMedium">+91-1234567890</span>
      </div>
      <div className="flex items-center justify-between mt-1">
      <div className="w-5">
          <MdAlternateEmail className="w-full h-full" />
        </div>
        <div className="w-5">
          <FaFacebookF className="w-full h-full" />
        </div>
        <div className="w-5">
          <FaYoutube className="w-full h-full" />
        </div>
        <div className="w-5">
          <FaTwitter className="w-full h-full" />
        </div>
        <div className="w-5">
          <FaInstagramSquare className="w-full h-full" />
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
