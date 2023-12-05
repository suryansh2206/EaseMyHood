import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import {Icons} from "./Menus";


const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 text-white py-7">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5"
          >
            <span className= "text-white">easemyhood</span> 
          </h1>
          <div>
          <input
            type="text"
            placeholder="Name"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
            
            <input
            type="text"
            placeholder="example@gmail.com"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
          <button
            className="text-gray-900 hover: bg-white duration-300 px-5 py-2.5 font-[Poppins] rounded-md  md:w-auto w-full"
          >
            Sign Up
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-blue-950 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-white text-sm pb-8"
      >
        <span>© 2023 easemyhood. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        
        <SocialIcons Icons={Icons} />
          </div>
    </footer>
  );
}

export default Footer;