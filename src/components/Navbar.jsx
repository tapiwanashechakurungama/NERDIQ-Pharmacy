import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify"; // Importing necessary components
import "react-toastify/dist/ReactToastify.css";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  //bg-[#f9f7f7]
  //https://nerdiq.co.zw/images/Nerd%20IQ.png

  const handleCartClick = () =>{
     toast.warn("Cart features not yet implemented");
  }
  return (
    <nav
      className={`bg-white md:fixed sticky shadow-md w-full top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4 mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0">
              <img
                src="https://nerdiq.co.zw/images/Nerd%20IQ.png"
                alt="NerdIQ Logo"
                className="h-20 w-auto"
              />
            </div>
          </Link>
          <div className="hidden md:flex md:space-x-8">
            <Link
              to="/"
              className="text-black no-underline hover:text-blue-500 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black no-underline hover:text-blue-500 font-semibold"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-black no-underline hover:text-blue-500 font-semibold"
            >
              Products
            </Link>
            <Link
              to="/prescriptions"
              className="text-black no-underline hover:text-blue-500 font-semibold"
            >
              Prescriptions
            </Link>
            <Link
              to="/contact"
              className="text-black no-underline hover:text-blue-500 font-semibold"
            >
              Contact
            </Link>
            <Link
              onClick={handleCartClick}
              to="/"
              className="text-black no-underline hover:text-blue-500 font-semibold justify-center items-center mt-1"
            >
              <MdOutlineAddShoppingCart />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="inline-flex items-center z-50 justify-center p-2 rounded-md text-gray-800"
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
        className={`fixed inset-y-0   z-10 left-0 transform h-screen bg-white transition-transform duration-300 ease-in-out ${
          openNav ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="flex flex-col pt-5 px-4 space-y-2 mt-8 bg-white ">
          <div className="flex space-x-5 border-b border-gray-200 justify-center">
            <a
              className="text-gray-800 py-2 hover:"
              href="https://twitter.com/nerdiq"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="text-gray-800 py-2 hover:text-gray-600"
              href="https://facebook.com/nerdiq"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="text-gray-800 py-2 hover:text-gray-600"
              href="https://instagram.com/nerdiq"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
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
          <Link
            to="/contact"
            onClick={() => setOpenNav(false)}
            className="block text-black no-underline hover:bg-gray-100 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Register
          </Link>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}
