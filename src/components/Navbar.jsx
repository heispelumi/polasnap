import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="container px-6 py-6 text-[#f5f5f5] md:h-[80px] mx-auto flex items-center justify-between md:px-12 lg:px-24 relative z-50">
        <div className="flex items-center gap-x-4">
          <h1 className="text-2xl logo hover:text-primary transition duration-300">
            Polasnap
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavDrawer} className="md:hidden">
          <IoIosMenu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex poppins items-center  text-[#f5f5f5] space-x-8">
          <Link to="/" className="text-sm font-light hover:text-pink-400 transition duration-200  ">
            Home
          </Link>
          <Link to="/createpolaroid" className="text-sm hover:text-pink-400 font-light transition duration-200">
            Create Polaroid
          </Link>
      
        </div>

     
      </nav>

      {/* Mobile Side Nav Overlay */}
      {navDrawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={toggleNavDrawer}
          />

          {/* Side Drawer */}
          <div
            className={`fixed top-0 left-0 bottom-0 w-80 bg-gradient-to-b from-white via-pink-50 to-white z-50 shadow-2xl transform transition duration-500 ${
              navDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } animate-slide-in `}
          >
            <div className="flex flex-col h-full relative">

              {/* Close Button */}
              <button
                onClick={toggleNavDrawer}
                className="absolute top-4 right-4 text-gray-500 text-3xl hover:text-pink-500 transition"
              >
                <IoMdClose />
              </button>

              {/* Branding */}
              <div className="p-6 mt-8 border-b border-gray-200">
                <h2 className="text-2xl logo font-bold text-gray-800">Polasnap</h2>
                <p className="text-sm poppins text-gray-500 mt-1">Capture the Moment.</p>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-4 px-6">
                {[
                  { label: "Home", to: "/" },
                  { label: "Create Polaroid", to:"/createpolaroid" },
               
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.to}
                    onClick={toggleNavDrawer}
                    className="relative group text-gray-700 poppins text-lg font-medium py-1"
                  >
                    <span className="group-hover:text-pink-400 transition duration-200">
                      {item.label}
                    </span>
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-pink-400"></span>
                  </Link>
                ))}

                {/* Mobile Sign Up Button */}
                <Link
                  to="/signup"
                  onClick={toggleNavDrawer}
                  className="mt-6 bg-pink-200 text-gray-700 hover:bg-pink-300 hover:text-primary text-center text-sm font-semibold px-4 py-2 rounded-md transition duration-300 shadow-md"
                >
                  Sign Up
                </Link>
              </nav>

              {/* Footer / Tagline */}
              <div className="mt-auto px-6 pb-6 text-gray-400 text-xs">
                <p>© {new Date().getFullYear()} Polasnap, All rights reserved.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
