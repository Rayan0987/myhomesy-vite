import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "لوحة التحكم", path: "/admin" },
    { name: "إدارة العقارات", path: "/admin/properties" },
    { name: "إدارة المستخدمين", path: "/admin/users" },
    { name: "إدارة المشاريع", path: "/admin/projects" },
    { name: "الرسائل", path: "/admin/messages" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <h1 className="text-lg font-bold text-blue-700">لوحة الإدارة</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`bg-white md:w-64 w-64 h-full p-4 border-r fixed top-0 md:static z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 shadow md:shadow-none`}>
        <h2 className="text-xl font-bold mb-6 text-blue-700 hidden md:block">لوحة الإدارة</h2>
        <nav className="space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg font-medium ${
                isActive(item.path)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
