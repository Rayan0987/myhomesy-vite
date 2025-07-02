import React from "react";

const dummyProperties = [
  {
    id: 1,
    title: "شقة فاخرة في دمشق - أبو رمانة",
    price: "200,000,000 ل.س",
    size: "150 م²",
    image: "https://via.placeholder.com/400x250?text=Property+1",
  },
  {
    id: 2,
    title: "منزل ريفي في ريف حمص",
    price: "95,000,000 ل.س",
    size: "220 م²",
    image: "https://via.placeholder.com/400x250?text=Property+2",
  },
  {
    id: 3,
    title: "استوديو حديث في حلب",
    price: "45,000,000 ل.س",
    size: "60 م²",
    image: "https://via.placeholder.com/400x250?text=Property+3",
  },
];

export default function FeaturedProperties() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-right">عقارات مميزة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyProperties.map((property) => (
          <div key={property.id} className="bg-white shadow rounded overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-right">
              <h3 className="text-lg font-bold mb-1">{property.title}</h3>
              <p className="text-sm text-gray-600">المساحة: {property.size}</p>
              <p className="text-blue-600 font-semibold mt-2">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
