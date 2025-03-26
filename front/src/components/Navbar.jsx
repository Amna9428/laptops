import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from "lucide-react";
import Logo from "../images/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Dropdown, Menu, Avatar, Button } from 'antd';

const Navbar = () => {
  const cart = useSelector(state => state.cartState.cart);
  const { isLogin } = useSelector((state) => state.authSlice);
  const dispatcher = useDispatch();

  const userMenu = (
    <Menu className="rounded-lg shadow-md p-2">
        <Menu.Item key="profile">
            <Link to="/profile" className="flex items-center p-2 hover:bg-gray-200 rounded-md">
                <User size={16} className="mr-2" /> Profile
            </Link>
        </Menu.Item>
        <Menu.Item key="orders">
            <Link to="/orders" className="flex items-center p-2 hover:bg-gray-200 rounded-md">
                <ShoppingCart size={16} className="mr-2" /> My Orders
            </Link>
        </Menu.Item>
        <Menu.Item key="logout" onClick={() => dispatcher(logout())}>
            <div className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer">
                Logout
            </div>
        </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-white text-black shadow-lg py-4 px-6 sticky top-0 w-full z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to='/'>
            <img className="h-12 w-auto" src={Logo} alt="ELECTRO Logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 font-medium">Home</Link>
          <Link to="/category" className="hover:text-gray-300 font-medium">Category</Link>
          <Link to="/about" className="hover:text-gray-300 font-medium">About Us</Link>
          <Link to="/faq" className="hover:text-gray-300 font-medium">FAQ</Link>
          <Link to="/blog" className="hover:text-gray-300 font-medium">Blog</Link>
          <Link to="/contact" className="hover:text-gray-300 font-medium">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="#" className="hover:text-gray-300">
            <Search size={22} />
          </Link>
          <Link to="/cart" className="relative hover:text-gray-300">
            <ShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs flex items-center justify-center h-5 w-5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          {isLogin ? (
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="flex items-center cursor-pointer">
                <Avatar style={{ backgroundColor: '#fff', color: '#000' }} icon={<User size={16} />} className="mr-2" />
                <Button type="primary" className="bg-white text-blue-600 hover:bg-gray-200">Account</Button>
              </div>
            </Dropdown>
          ) : (
            <Link to='/login'>
              <Button type="primary" className="bg-white text-blue-600 hover:bg-gray-200">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;