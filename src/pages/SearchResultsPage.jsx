// src/pages/SearchResultsPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchResultsPage() {
  const { state } = useLocation();

  const governorate = state?.governorate || 'غير محددة';
  const location = state?.location || 'غير محدد';
  const priceMin = state?.priceMin || 'غير محدد';
  const priceMax = state?.priceMax || 'غير محدد';
  const rooms = state?.rooms || 'غير محدد';
  const type = state?.type || 'غير محدد';
  const purpose = state?.purpose || 'غير محدد';

  const mockResults = [
    {
      id: 1,
      title: 'شقة حديثة 3 غرف في مشروع دمر',
      price: '500,000,000',
      area: 120,
      image: '/placeholder1.jpg',
    },
    {
      id: 2,
      title: 'شقة مفروشة غرفتين في المالكي',
      price: '350,000,000',
      area: 95,
      image: '/placeholder2.jpg',
    },
    {
      id: 3,
      title: 'منزل طابقي في اللاذقية - المشروع العاشر',
      price: '420,000,000',
      area: 140,
      image: '/placeholder3.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
        نتائج البحث
      </h2>

      <div className="bg-white shadow rounded-lg p-6 text-gray-700 space-y-3">
        <p><strong>نوع العملية:</strong> {purpose}</p>
        <p><strong>نوع العقار:</strong> {type}</p>
        <p><strong>المحافظة:</strong> {governorate}</p>
        <p><strong>الموقع:</strong> {location}</p>
        <p><strong>عدد الغرف:</strong> {rooms}</p>
        <p><strong>السعر:</strong> من {priceMin} إلى {priceMax} ل.س</p>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-800">
        العقارات المطابقة:
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResults.map((property) => (
          <div key={property.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h4 className="text-lg font-bold text-blue-700">{property.title}</h4>
              <p>السعر: {property.price} ل.س</p>
              <p>المساحة: {property.area} م²</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
