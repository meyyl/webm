import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  FileText,
  Home,
  LayoutGrid,
  FileEdit,
  Calendar,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      icon: <GraduationCap size={20} />,
      label: "My courses",
      path: "/my-courses",
    },
    {
      icon: <FileText size={20} />,
      label: "Course notes",
      path: "/course-notes",
    },
    { icon: <Home size={20} />, label: "Site home", path: "/" },
    {
      icon: <LayoutGrid size={20} />,
      label: "All courses",
      path: "/all-courses",
    },
    { icon: <FileEdit size={20} />, label: "Blog", path: "/blog" },
    { icon: <Calendar size={20} />, label: "Calendar", path: "/calendar" },
    { icon: <Award size={20} />, label: "Badges", path: "/badges" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } h-screen bg-white text-gray-800 flex flex-col transition-all duration-300 shadow-md border-r`}
    >
      <div
        className="p-4 border-b border-gray-200 flex items-center cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <h1 className="font-bold text-gray-700 flex items-center">
            Selapan
            <ChevronLeft size={20} className="ml-2" />
          </h1>
        ) : (
          <ChevronRight size={20} className="mx-auto" />
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span className={`${isOpen ? "mr-3" : "mx-auto"}`}>
                  {item.icon}
                </span>
                <span className={isOpen ? "block" : "hidden"}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
