// src/pages/Favorites.jsx
import React from "react";

export default function Favorites() {
  const favorites = [
    { id: 1, title: "شقة في دمشق", price: "50,000$", area: "100 م²", image: "/images/property1.jpg" },
    { id: 2, title: "فيلا في حلب", price: "120,000$", area: "250 م²", image: "/images/property2.jpg" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-24 p-4 pb-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">المفضلة</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {favorites.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">السعر: {item.price}</p>
              <p className="text-gray-600">المساحة: {item.area}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
