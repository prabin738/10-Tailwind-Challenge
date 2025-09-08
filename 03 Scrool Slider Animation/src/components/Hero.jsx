import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa6";
import { MdLaptopWindows } from "react-icons/md";
import { FaHandBackFist } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="hero">
      <div
        id="hero-container"
        className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12"
      >
        <div
          id="version-text"
          className="flex items-center my-6 gap-2 bg-yellow-100 border border-yellow-500 rounded-lg 
          px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition
          group
          "
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
          <p className="font-display font-bold text-yellow-600">
            {" "}
            v0.21.1:{" "}
            <span className="text-yellow-800 font-bold">
              Find-in-page bug fixes
            </span>
          </p>
          <FaLongArrowAltRight className="text-yellow-600 group-hover:translate-x-1 transition duration-300" />
        </div>
        <div id="hero-features" className="hidden sm:flex gap-8 my-6">
          <div className="flex justify-center items-center gap-2 text-gray-500 ">
            <FaRegFileCode />
            <p className="flex flex-1">Code Optional</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-500 ">
            <FaHandBackFist />
            <p className="flex flex-1">Drag and Drop Builder</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-500 ">
            <MdLaptopWindows />
            <p className="flex flex-1">Windows, MAC, Linux</p>
          </div>
        </div>

        <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-7xl">
          Web app to Desktop App in Minutes
        </h1>
        <p className="text-xl mt-4 sm:text-2xl sm:mt-8 sm:leading-normal text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea
          impedit repellat voluptas ratione est accusantium, porro aspernatur at
          magnam adipisci asperiores aut harum commodi, inventore iste, unde
          provident quibusdam?
        </p>
        <div
          id="btn-container"
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-3 font-semibold bg-primary text-white rounded-lg shadow-sm hover:bg-opacity-90">
            Download Now
          </button>
          <button
            className="px-8 py-3 font-semibold rounded-lg
          bg-white border border-gray-400 hover:border-gray-800"
          >
            Read Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
