import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
