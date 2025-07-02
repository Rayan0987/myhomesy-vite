// src/components/PropertyCard.jsx
import React from "react";

export default function PropertyCard({
  title,
  location,
  price,
  area,
  rooms,
  image,
  type,
  className = "",
}) {
  const typeColor =
    type === "شراء"
      ? "bg-green-500"
      : type === "إيجار"
      ? "bg-blue-500"
      : "bg-gray-400";

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
        <span
          className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md ${typeColor}`}
        >
          {type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{location}</p>
        <p className="text-sm text-gray-700 mt-2">
          <span className="font-semibold">{price} ل.س</span> — {area} م² — {rooms} غرف
        </p>
      </div>
    </div>
  );
}
