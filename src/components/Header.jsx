// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    { id: 1, text: "تمت إضافة عقار جديد في دمشق" },
    { id: 2, text: "مشروع جديد متاح في حلب" },
    { id: 3, text: "تم تحديث حالة مشروع النخيل" },
  ];

  return (
    <>
      {/* الشريط العلوي على الكمبيوتر */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-40 hidden md:block" dir="rtl">
        <div className="flex items-center justify-between w-full px-8 py-4">
          {/* روابط التنقل */}
          <nav className="flex gap-6 text-sm sm:text-base font-medium text-gray-700 items-center relative">
            <Link to="/" className="hover:text-blue-600 transition">الرئيسية 🏠</Link>
            <Link to="/add" className="hover:text-blue-600 transition">نشر عقار ➕</Link>
            <Link to="/messages" className="hover:text-blue-600 transition">الرسائل 💬</Link>
            <Link to="/terms" className="hover:text-blue-600 transition">الشروط 📜</Link>
            <Link to="/about" className="hover:text-blue-600 transition">من نحن 👤</Link>

            {/* زر الإشعارات مع القائمة المنسدلة */}
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="relative hover:text-blue-600 transition focus:outline-none"
                title="الإشعارات"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -left-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>

              {/* القائمة المنسدلة */}
              {showNotifications && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50 text-sm">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      {notif.text}
                    </div>
                  ))}
                  {notifications.length === 0 && (
                    <div className="px-4 py-3 text-gray-400 text-center">
                      لا توجد إشعارات
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* زر تسجيل الدخول */}
            <Link
              to="/login"
              className="ml-1 px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              تسجيل دخول
            </Link>
          </nav>

          {/* اسم التطبيق */}
          <div className="text-xl font-bold text-blue-600">MyHome.sy</div>
        </div>
      </header>

      {/* شريط علوي بسيط للجوال فقط بكلمة MyHome.sy في المنتصف */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-40 md:hidden flex justify-center items-center py-4">
        <div className="text-xl font-bold text-blue-600">MyHome.sy</div>
      </header>
    </>
  );
}
