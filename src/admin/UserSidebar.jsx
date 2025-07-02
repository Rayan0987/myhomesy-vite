// src/admin/UserSidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function UserSidebar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        className="md:hidden p-3 fixed top-4 left-4 bg-blue-600 text-white rounded z-50"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md z-40 transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } w-64`}
      >
        <div className="p-6 border-b border-gray-200 text-xl font-bold text-blue-700">
          لوحة المستخدم
        </div>
        <nav className="flex flex-col p-4 space-y-2 text-gray-700">
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "bg-blue-100 rounded p-2 font-semibold" : "p-2 rounded hover:bg-gray-100"
            }
          >
            لوحة التحكم
          </NavLink>
          <NavLink
            to="/user/properties"
            className={({ isActive }) =>
              isActive ? "bg-blue-100 rounded p-2 font-semibold" : "p-2 rounded hover:bg-gray-100"
            }
          >
            عقاراتي
          </NavLink>
          <NavLink
            to="/user/projects"
            className={({ isActive }) =>
              isActive ? "bg-blue-100 rounded p-2 font-semibold" : "p-2 rounded hover:bg-gray-100"
            }
          >
            مشاريعي
          </NavLink>
          <NavLink
            to="/user/messages"
            className={({ isActive }) =>
              isActive ? "bg-blue-100 rounded p-2 font-semibold" : "p-2 rounded hover:bg-gray-100"
            }
          >
            رسائلي
          </NavLink>
          <NavLink
            to="/user/settings"
            className={({ isActive }) =>
              isActive ? "bg-blue-100 rounded p-2 font-semibold" : "p-2 rounded hover:bg-gray-100"
            }
          >
            إعدادات الحساب
          </NavLink>
          <button
            onClick={() => alert("تسجيل خروج")}
            className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            تسجيل خروج
          </button>
        </nav>
      </aside>
    </>
  );
}
