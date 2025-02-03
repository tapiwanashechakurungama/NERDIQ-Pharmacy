import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  // Close the mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-[#f9f7f7] shadow-md sticky top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4 mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0">
              <img
                src="./../../public/logo.jpg"
                alt="Logo"
                className="h-20 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              to="/"
              className="text-black no-underline hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black no-underline hover:text-blue-500"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-black no-underline hover:text-blue-500"
            >
              Products
            </Link>
            <Link
              to="/prescriptions"
              className="text-black no-underline hover:text-blue-500"
            >
              Prescriptions
            </Link>
            <Link
              to="/contact"
              className="text-black no-underline hover:text-blue-500"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={openNav}
            >
              <span className="sr-only">Open main menu</span>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-8 6h8"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white transition-transform duration-300 ease-in-out ${
          openNav ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="flex flex-col pt-5 px-4 space-y-2 mt-8 bg-white h-[100vh]">
          <Link
            to="/"
            onClick={() => setOpenNav(false)}
            className="block  hover:bg-gray-100 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium text-black no-underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpenNav(false)}
            className="block  hover:bg-gray-100 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium text-black no-underline"
          >
            About
          </Link>
          <Link
            to="/products"
            onClick={() => setOpenNav(false)}
            className="block  hover:bg-gray-100 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium text-black no-underline"
          >
            Products
          </Link>
          <Link
            to="/prescriptions"
            onClick={() => setOpenNav(false)}
            className="block text-black no-underline hover:bg-gray-100 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Prescriptions
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpenNav(false)}
            className="block text-black no-underline hover:bg-gray-100 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
