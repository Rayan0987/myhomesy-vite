// ProjectsManagement.jsx
import React, { useState, useEffect } from 'react';

export default function ProjectsManagement() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      { id: 1, name: 'مشروع دمشق', status: 'قيد الإنشاء' },
      { id: 2, name: 'مشروع حلب', status: 'جاهز' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">إدارة المشاريع</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">اسم المشروع</th>
            <th className="border border-gray-300 px-4 py-2">الحالة</th>
            <th className="border border-gray-300 px-4 py-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(({ id, name, status }) => (
            <tr key={id} className="text-center border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">{name}</td>
              <td className="border border-gray-300 px-4 py-2">{status}</td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">تعديل</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">حذف</button>
              </td>
            </tr>
          ))}
          {projects.length === 0 && (
            <tr>
              <td colSpan="3" className="py-4">لا توجد مشاريع حالياً</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
