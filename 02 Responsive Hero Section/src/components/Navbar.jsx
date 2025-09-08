import logo from "../assets/avt.png";
import { TiThMenu } from "react-icons/ti";
import { IoLogoElectron } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "../index.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleMenu = () => {
    // alert("Hello");
    setIsNavOpen(true);
  };

  return (
    <>
      <nav className="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" className="flex flex-1 gap-2 items-center">
          <img
            src={logo}
            alt=""
            className="object-cover max-w-12 max-h-12 items-center"
          />
          <span className="text-lg font-medium font-display">To Desktop</span>
        </a>
        <div id="nav-menu" className="hidden lg:flex gap-12">
          <a href="#" className="font-medium hover:text-primary">
            Pricing
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Docs
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Changelog
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Blogs
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Login
          </a>
        </div>
        <div className=" hidden lg:flex justify-end flex-1 ">
          <button className=" lg:flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-indigo-600 md:flex ">
            {" "}
            <IoLogoElectron className="text-xl" />{" "}
            <span> Electron Developers</span>{" "}
            <FaLongArrowAltRight className="text-xl relative top-[1px]" />
          </button>
        </div>

        <button className="p-2 lg:hidden" onClick={handleMenu}>
          <TiThMenu size={32} className="text-gray-300 " />
        </button>

        {/* another fixed div for mobile
         */}

        {isNavOpen && (
          <div
            id="nav-dialog"
            className="fixed z-10 lg:hidden  bg-white inset-0 p-3"
          >
            <div id="nav-bar" className="flex justify-between">
              <a href="#" id="brand" className="flex gap-2 items-center">
                <img
                  src={logo}
                  alt=""
                  className="object-cover max-w-12 max-h-12 items-center"
                />
                <span className="text-lg font-medium font-display">
                  To Desktop
                </span>
              </a>
              <button
                className="p-2 lg:hidden"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <IoCloseCircle size={32} className="text-gray-300 " />
              </button>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-300 block rounded-lg"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-300 block rounded-lg"
              >
                Docs
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-300 block rounded-lg"
              >
                Changelog
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-300 block rounded-lg"
              >
                Blogs
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-300 block rounded-lg"
              >
                Login
              </a>
              {/* <hr /> */}
            </div>
            <div className="h-[1px] bg-gray-300"></div>
            <button className=" font-bold gap-2 items-center  px-6 py-4 rounded-lg hover:bg-gray-300 hover:border hover:border-indigo-500 flex w-full mt-6">
              {" "}
              <IoLogoElectron className="text-xl font-bold" />{" "}
              <span> Electron Developers</span>{" "}
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
