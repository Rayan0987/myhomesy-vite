// src/admin/PropertiesManagement.jsx
import React, { useState, useEffect } from "react";

export default function PropertiesManagement() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
    const demoProperties = [
      {
        id: 1,
        title: "شقة جميلة في دمشق",
        price: 50000,
        rooms: 3,
        area: 120,
        status: "متاحة",
      },
      {
        id: 2,
        title: "فيلا فاخرة في اللاذقية",
        price: 150000,
        rooms: 5,
        area: 350,
        status: "مباعة",
      },
    ];
    setProperties(demoProperties);
    setLoading(false);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">إدارة العقارات</h2>

      {loading ? (
        <p>جاري التحميل...</p>
      ) : properties.length === 0 ? (
        <p>لا توجد عقارات لعرضها.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead>
            <tr>
              <th className="border px-4 py-2">العنوان</th>
              <th className="border px-4 py-2">السعر</th>
              <th className="border px-4 py-2">عدد الغرف</th>
              <th className="border px-4 py-2">المساحة (م²)</th>
              <th className="border px-4 py-2">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="text-center">
                <td className="border px-4 py-2">{property.title}</td>
                <td className="border px-4 py-2">{property.price} $</td>
                <td className="border px-4 py-2">{property.rooms}</td>
                <td className="border px-4 py-2">{property.area}</td>
                <td className="border px-4 py-2">{property.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
