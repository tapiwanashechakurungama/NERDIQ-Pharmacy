import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
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
            <Link to="/contact" className="text-white hover:text-blue-300 mb-1">
              Contact
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-white">Midlands State university</p>
            <p className="text-white">Main Campus, Gweru,</p>
            <p className="text-white">Phone: +263 771 383 631</p>
            <p className="text-white">Email: info@nerdiq.co.zw</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-5">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-white">
          &copy; {new Date().getFullYear()} Nerdiq Pharmacy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
