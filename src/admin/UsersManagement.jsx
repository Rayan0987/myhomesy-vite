// UsersManagement.jsx
import React, { useState, useEffect } from 'react';

export default function UsersManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', role: 'مستخدم' },
      { id: 2, name: 'سارة علي', email: 'sara@example.com', role: 'مشرف' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">إدارة المستخدمين</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">الاسم</th>
            <th className="border border-gray-300 px-4 py-2">البريد الإلكتروني</th>
            <th className="border border-gray-300 px-4 py-2">الدور</th>
            <th className="border border-gray-300 px-4 py-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, role }) => (
            <tr key={id} className="text-center border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">{name}</td>
              <td className="border border-gray-300 px-4 py-2">{email}</td>
              <td className="border border-gray-300 px-4 py-2">{role}</td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">تعديل</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">حذف</button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="py-4">لا توجد مستخدمين حالياً</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
