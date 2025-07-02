import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function DesktopSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:block relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-600 transition text-2xl p-2"
        aria-label="Toggle Menu"
      >
        <Menu />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-50 w-56">
          <ul className="flex flex-col text-right p-4 space-y-3 font-medium text-gray-700">
            <li><Link to="/" className="hover:text-blue-600">🏠 الرئيسية</Link></li>
            <li><Link to="/logos" className="hover:text-blue-600">🎯 الشعارات</Link></li>
            <li><Link to="/messages" className="hover:text-blue-600">✉️ الرسائل</Link></li>
            <li><Link to="/add-property" className="hover:text-blue-600">➕ أضف عقارك</Link></li>
            <li><Link to="/add-project" className="hover:text-blue-600">🏗️ أضف مشروعك</Link></li>
            <li><Link to="/terms" className="hover:text-blue-600">📜 الشروط والأحكام</Link></li>
            <li><Link to="/tips" className="hover:text-blue-600">💡 نصائح</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">ℹ️ من نحن</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
