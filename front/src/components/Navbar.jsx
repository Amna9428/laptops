import React from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import Logo from "../images/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cartState.cart);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="h-12 w-auto sm:h-12" src={Logo} alt="ELECTRO Logo" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link to="/category" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            Category
          </Link>
          <Link to="/about" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            About Us
          </Link>
          <Link to="/faq" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            FAQ
          </Link>
          <Link to="/blog" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link to="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            <Search size={22} />
          </Link>

          <Link to="#" className="relative text-gray-700 hover:text-blue-600 transition duration-300">
            <ShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs flex justify-center items-center h-5 w-5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <Link to="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            <User size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
