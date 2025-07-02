// src/pages/Profile.jsx
import React from "react";

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
        />
        <h1 className="text-3xl font-bold text-gray-800">محمد الأحمد</h1>
        <p className="text-gray-500 text-center">
          مهتم بالعقارات، مستثمر ومطور عقاري من دمشق
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 text-gray-700">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2">عقاراتي المنشورة</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2">العقارات المفضلة</h3>
          <p className="text-3xl font-bold text-green-600">5</p>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          تعديل الملف الشخصي
        </button>
        <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}
