import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">NerdIQ</h1>
            <p className="mt-2 text-white">
              Your trusted partner in health and wellness.
            </p>
          </div>

          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <Link to="/" className="text-white hover:text-blue-300 mb-1">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-300 mb-1">
              About Us
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-blue-300 mb-1"
            >
              Products
            </Link>
            <Link
              to="/prescriptions"
              className="text-white hover:text-blue-300 mb-1"
            >
              Prescriptions
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-300 mb-1">
              Contact
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-white">Midlands State University</p>
            <p className="text-white">Main Campus, Gweru,</p>
            <p className="text-white">Phone: +263 771 383 631</p>
            <p className="text-white">Email: info@nerdiq.co.zw</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-5">
              <a
                className="text-white hover:text-gray-600"
                href="https://www.linkedin.com/company/nerd-iq/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="text-white hover:text-gray-600"
                href="https://www.facebook.com/profile.php?id=61556964325466"
              >
                {" "}
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                className="text-white hover:text-gray-600"
                href="https://www.instagram.com/nerdiq_official/"
              >
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t md:flex border-gray-700 mt-6 pt-4 text-center justify-between text-white">
          <p>
            &copy; {new Date().getFullYear()} NERDIQ Pharmacy. All rights
            reserved.
          </p>
          <a  href="https://nerdiq.co.zw" className="opacity-[0.6] text-gray-400 ">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
