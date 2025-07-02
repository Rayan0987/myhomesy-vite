// src/admin/MyProperties.jsx
import React from "react";
import UserSidebar from "./UserSidebar";

export default function MyProperties() {
  const properties = [
    { id: 1, title: "شقة في دمشق", price: "50,000$", status: "نشط" },
    { id: 2, title: "فيلا في حلب", price: "120,000$", status: "مباع" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 font-cairo">
      <UserSidebar />
      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">عقاراتي</h1>
        <div className="space-y-4">
          {properties.map(({ id, title, price, status }) => (
            <div
              key={id}
              className="bg-white shadow rounded p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600">{price}</p>
              </div>
              <span
                className={`px-3 py-1 rounded text-white ${
                  status === "نشط" ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
