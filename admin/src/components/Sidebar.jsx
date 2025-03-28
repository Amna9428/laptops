import React from 'react'
import { Home, PenLine, Box, ShoppingBag, Users, MessageCircleMore } from "lucide-react";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen  dark:bg-gray-700  p-4 flex flex-col">
      <div className="flex items-center space-x-2 px-2 mb-6">
        <div className="text-gray-500 dark:text-gray-400 font-bold text-xl">LapStore</div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/dashboard" 
              end={true}
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-500 text-white rounded-lg flex items-center p-3 space-x-2'
                  : 'flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
              }>
              <Home size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/create" end={true} className={({ isActive }) =>
                isActive
                  ? 'bg-gray-500 text-white rounded-lg flex items-center p-3 space-x-2'
                  : 'flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
              }>
              <PenLine size={20} />
              <span>Create Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/products" end={true} className={({ isActive }) =>
                isActive
                  ? 'bg-gray-500 text-white rounded-lg flex items-center p-3 space-x-2'
                  : 'flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
              }>
              <Box size={20} />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/dashboard/feedback" end={true} className={({ isActive }) =>
                isActive
                  ? 'bg-gray-500 text-white rounded-lg flex items-center p-3 space-x-2'
                  : 'flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
              }>
              <MessageCircleMore size={20} />
              <span>Feedback</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/orders" end={true} className={({ isActive }) =>
                isActive
                  ? 'bg-gray-500 text-white rounded-lg flex items-center p-3 space-x-2'
                  : 'flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
              }>
              <ShoppingBag size={20} />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Users size={20} />
              <span>Customer</span>
            </a>
          </li>
          
         
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar