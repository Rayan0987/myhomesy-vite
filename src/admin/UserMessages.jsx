// src/admin/UserMessages.jsx
import React from "react";
import UserSidebar from "./UserSidebar";

export default function UserMessages() {
  const messages = [
    {
      id: 1,
      from: "علي",
      subject: "استفسار عن العقار",
      date: "2025-06-08",
      content: "هل العقار لا زال متوفرًا؟ أريد زيارة المعاينة.",
    },
    {
      id: 2,
      from: "سارة",
      subject: "طلب معلومات",
      date: "2025-06-07",
      content: "أود معرفة المزيد عن تفاصيل المشروع.",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 font-cairo">
      <UserSidebar />
      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">رسائلي</h1>
        <div className="space-y-6">
          {messages.map(({ id, from, subject, date, content }) => (
            <div key={id} className="bg-white shadow rounded p-4">
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold text-lg">{subject}</h2>
                <span className="text-gray-400 text-sm">{date}</span>
              </div>
              <p className="text-gray-700 mb-2">من: {from}</p>
              <p className="text-gray-600">{content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
