"use client";
import React, { useState } from "react";
import { Home, Info, User, ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-900 text-white shadow-lg transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-52"
      }`}
    >
      {/* Toggle Button */}
      <div className="absolute top-4 right-[-16px] bg-gray-800 text-gray-300 rounded-full p-1 cursor-pointer shadow-md z-10">
        <button onClick={toggleSidebar}>
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-center my-6 tracking-wide">
            MyApp
          </h1>
        )}

        {/* Navigation Links */}
        <nav className="mt-8 flex flex-col items-center space-y-4">
          <a
            href="#home"
            className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition w-full justify-center"
          >
            <Home className="w-5 h-5" />
            {!isCollapsed && <span>Home</span>}
          </a>
          <a
            href="#about"
            className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition w-full justify-center"
          >
            <User className="w-5 h-5" />
            {!isCollapsed && <span>About</span>}
          </a>
          <a
            href="#info"
            className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition w-full justify-center"
          >
            <Info className="w-5 h-5" />
            {!isCollapsed && <span>Info</span>}
          </a>
        </nav>
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="absolute bottom-4 w-full text-center text-gray-500 text-xs">
          © 2025 MyApp. All rights reserved.
        </div>
      )}
    </div>
  );
};

export default Sidebar;
