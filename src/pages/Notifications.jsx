// src/pages/Notifications.jsx
import React from "react";

export default function Notifications() {
  const notifications = [
    { id: 1, message: "تم تحديث حالة عقارك المنشور.", date: "قبل 2 ساعة" },
    { id: 2, message: "عرض خاص: خصم 10% على خدماتنا هذا الشهر.", date: "قبل يوم" },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">الإشعارات</h2>
      <ul className="space-y-4">
        {notifications.map((note) => (
          <li key={note.id} className="p-4 border rounded-lg bg-blue-50">
            <p className="text-gray-800">{note.message}</p>
            <span className="text-gray-500 text-sm">{note.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
