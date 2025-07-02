// src/admin/UserDashboard.jsx
import React from "react";
import UserSidebar from "./UserSidebar";

export default function UserDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50 font-cairo">
      <UserSidebar />
      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">لوحة تحكم المستخدم</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow rounded p-4 text-center">
            <p className="text-2xl font-semibold">5</p>
            <p className="text-gray-500">عقارات نشطة</p>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p className="text-2xl font-semibold">2</p>
            <p className="text-gray-500">مشاريع</p>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p className="text-2xl font-semibold">3</p>
            <p className="text-gray-500">رسائل جديدة</p>
          </div>
        </div>
        <section className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">مرحباً بك في لوحة التحكم الخاصة بك!</h2>
          <p className="text-gray-600">
            يمكنك متابعة عقاراتك، مشاريعك، والرسائل الخاصة بك من هنا.
          </p>
        </section>
      </main>
    </div>
  );
}
