import React, { useState } from "react";
import { Bell, Search } from "lucide-react";

const Navbar = ({ userName = "Meisi", userInitials = "M" }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-white shadow-sm h-16 flex items-center justify-between px-4 z-10">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Cari..."
          className="w-full bg-gray-100 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
      </div>

      <div className="flex items-center">
        <div className="mr-4 relative">
          <Bell size={20} className="text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="mr-2 text-gray-700">{userName}</span>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              {userInitials}
            </div>
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
