import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">لوحة التحكم - نظرة عامة</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">عدد الزيارات</h2>
          <p className="text-3xl">1234</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">عدد العقارات</h2>
          <p className="text-3xl">56</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">عدد المشاريع</h2>
          <p className="text-3xl">12</p>
        </div>
      </div>
    </div>
  );
}
