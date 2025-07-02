// src/components/AccountMenu.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Home,
  MessageCircle,
  Heart,
  Bell,
  Settings,
  HelpCircle,
  Info,
  LogOut,
} from "lucide-react";

export default function AccountMenu({ onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <User size={20} />, label: "الملف الشخصي", path: "/profile" },
    { icon: <Home size={20} />, label: "عقاراتي", path: "/my-properties" },
    { icon: <MessageCircle size={20} />, label: "الرسائل", path: "/messages" },
    { icon: <Heart size={20} />, label: "المفضلة", path: "/favorites" },
    { icon: <Bell size={20} />, label: "الإشعارات", path: "/notifications" },
    { icon: <Settings size={20} />, label: "إعدادات الحساب", path: "/settings" },
    { icon: <HelpCircle size={20} />, label: "التواصل والدعم", path: "/support" },
    { icon: <Info size={20} />, label: "من نحن", path: "/about" },
  ];

  return (
    <div className="fixed inset-0 bg-gray-50 z-40 pt-[16%] pb-20 px-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-blue-700 mb-4">حسابي</h2>
      <div className="space-y-3">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              navigate(item.path);
              onClose?.();
            }}
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow hover:bg-gray-100 cursor-pointer transition"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <span className="text-blue-600">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          </div>
        ))}
        <div
          onClick={() => {
            navigate("/logout");
            onClose?.();
          }}
          className="flex items-center justify-between p-4 bg-white rounded-xl shadow hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center gap-3 text-red-600">
            <LogOut size={20} />
            <span className="text-sm font-medium">تسجيل الخروج</span>
          </div>
        </div>
      </div>
    </div>
  );
}
