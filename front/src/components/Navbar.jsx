import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, LogOut, LogIn } from "lucide-react";
import Logo from "../images/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Dropdown, Menu, Avatar } from 'antd';

const Navbar = () => {
  const cart = useSelector(state => state.cartState.cart);
  const { isLogin } = useSelector((state) => state.authSlice);
  const dispatcher = useDispatch();

  const userMenu = (
    <Menu className="rounded-lg shadow-md p-2">
        <Menu.Item key="profile">
            <Link to="/profile" className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                <User size={16} className="mr-2" /> Profile
            </Link>
        </Menu.Item>
        <Menu.Item key="orders">
            <Link to="/orders" className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                <ShoppingCart size={16} className="mr-2" /> My Orders
            </Link>
        </Menu.Item>
        <Menu.Item key="logout" onClick={() => dispatcher(logout())}>
            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <LogOut size={16} className="mr-2" /> Logout
            </div>
        </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 w-full z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to='/'>
            <img className="h-12 w-auto" src={Logo} alt="ELECTRO Logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/category" className="text-gray-700 hover:text-blue-600 font-medium">Category</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
          <Link to="/faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            <Search size={22} />
          </Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
            <ShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs flex items-center justify-center h-5 w-5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          {isLogin ? (
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<User size={16} />} className="mr-2" />
                <span className='font-medium'>Account</span>
              </div>
            </Dropdown>
          ) : (
            <Link to='/login' className='text-gray-700 hover:text-blue-600'>
              <LogIn size={22} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;