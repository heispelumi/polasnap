import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className="container px-6 py-6  text-[#f5f5f5] md:h-[80px] mx-auto flex items-center justify-between md:px-12 lg:px-24 relative z-50">
        {/* Logo and Menu Button */}
        <div className="flex items-center gap-x-4">
          <h1 className="text-2xl  logo  hover:text-primary transition duration-300">Polasnap</h1>
        </div>
          <button onClick={toggleNavDrawer} className="md:hidden">
            <CiMenuKebab className="h-6 w-6 " />
          </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex poppins items-center text-[#f5f5f5] space-x-8">
          <Link to="/" className=" text-sm font-light transition duration-200">
            Home
          </Link>
          <Link to="/createpolaroid" className="  text-sm font-light transition duration-200">
            Create Polaroid
          </Link>
          <Link to="/gallery" className=" text-sm font-light transition duration-200">
            Gallery
          </Link>
          <Link to="/contact" className=" text-sm font-light transition duration-200">
            Contact
          </Link>
        </div>

        {/* Signup Link */}
        <div className="md:flex poppins hidden  bg-[#f5f5f5] px-4 rounded-md py-2 items-center">
          <Link to="/signup" className="text-gray-700 hover:text-primary poppins  text-sm font-medium transition duration-200">
            Sign Up
          </Link>
        </div>

   
      </nav>

      {/* Side Drawer Navigation (For Mobile) */}
      {navDrawerOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 overflow-y-auto">
          <div className="flex flex-col gap-y-4 p-6">
            <button onClick={toggleNavDrawer} className="absolute top-4 right-4 text-gray-600 text-3xl">
              <IoMdClose />
            </button>

            <Link to="/" className="text-gray-700 hover:text-primary text-lg font-medium mb-4 mt-10">
              Home
            </Link>
            <Link to="/createpolaroid" className="text-gray-700 hover:text-primary text-lg font-medium mb-4">
              Create Polaroid
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-primary text-lg font-medium mb-4">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary text-lg font-medium">
              Contact
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-primary text-lg font-medium mt-4">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
