import React, { useEffect, useState } from 'react';
import { Bell, Search, Sun, Moon } from "lucide-react";
import UserDropdown from './UserDropdown';

const Topbar = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="flex items-center justify-between bg-white dark:bg-gray-900 shadow-lg px-8 py-4 rounded-2xl m-6 border border-gray-200 dark:border-gray-800">
            {/* Left Section - Search Bar */}
            <div className="flex items-center gap-4 w-1/3">
                <Search className="text-gray-500 dark:text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                />
            </div>

            {/* Center Section - Title */}
            <div className="hidden md:flex items-center justify-center text-lg font-semibold text-gray-800 dark:text-white">
                Dashboard
            </div>

            {/* Right Section - Icons and Profile */}
            <div className="flex items-center gap-6">
                {/* Light/Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
                >
                    {darkMode ? <Sun size={22} className="text-yellow-500" /> : <Moon size={22} className="text-gray-800 dark:text-gray-300" />}
                </button>

                {/* Notification Bell */}
                <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                    <Bell size={24} className="text-gray-600 dark:text-gray-300" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">2</span>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                <UserDropdown />
                   
                </div>
            </div>
        </div>
    );
};

export default Topbar;
