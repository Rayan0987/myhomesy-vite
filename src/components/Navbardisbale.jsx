// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold text-gray-800">MyHome.sy</h1>

        {/* Desktop Menu Toggle */}
        <div className="hidden md:block relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-black"
          >
            <Menu size={28} />
          </button>

          {open && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border py-3 z-50">
              <ul className="space-y-2 text-right px-4 text-gray-700">
                <li><Link to="/" className="block hover:text-blue-600">الرئيسية</Link></li>
                <li><Link to="/add" className="block hover:text-blue-600">أضف عقارك</Link></li>
                <li><Link to="/add" className="block hover:text-blue-600">أضف مشروعك</Link></li>
                <li><Link to="/messages" className="block hover:text-blue-600">الرسائل</Link></li>
                <li><Link to="/terms" className="block hover:text-blue-600">الشروط والأحكام</Link></li>
                <li><Link to="/tips" className="block hover:text-blue-600">نصائح</Link></li>
                <li><Link to="/about" className="block hover:text-blue-600">من نحن</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
