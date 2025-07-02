import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState('شراء');
  const [governorate, setGovernorate] = useState('');
  const [location, setLocation] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [rooms, setRooms] = useState('');
  const [type, setType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search-results', {
      state: {
        purpose,
        governorate,
        location,
        priceMin,
        priceMax,
        rooms,
        type,
      },
    });
  };

  const calculatePriceRange = () => {
    if (priceMin && priceMax) {
      const min = parseInt(priceMin);
      const max = parseInt(priceMax);
      const average = (min + max) / 2;
      if (average < 250000000) return '💸 منخفض';
      if (average < 750000000) return '💰 متوسط';
      return '🤑 مرتفع';
    }
    return '';
  };

  return (
    <div className="p-6 max-w-3xl mx-auto pb-28">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        🔍 ابحث عن عقارك المثالي
      </h2>

      <form onSubmit={handleSearch} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold mb-2">📌 نوع العملية:</label>
          <div className="flex gap-3 flex-wrap">
            {['شراء', 'إيجار'].map((option) => (
              <button
                key={option}
                type="button"
                className={`px-4 py-2 rounded-full border ${
                  purpose === option ? 'bg-blue-600 text-white' : 'bg-gray-100'
                }`}
                onClick={() => setPurpose(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">🏠 نوع العقار:</label>
          <div className="flex gap-4 flex-wrap">
            {['سكن', 'أرض', 'محل'].map((option) => (
              <button
                key={option}
                type="button"
                className={`px-4 py-2 rounded-full border ${
                  type === option ? 'bg-blue-600 text-white' : 'bg-gray-100'
                }`}
                onClick={() => setType(option)}
              >
                {option === 'سكن' && '🏘️ سكن (شقة/منزل)'}
                {option === 'أرض' && '🌳 أرض'}
                {option === 'محل' && '🏪 محل تجاري'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">💰 السعر بالليرة السورية:</label>
          <div className="flex gap-4">
            <input
              type="number"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              placeholder="من"
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder="إلى"
              className="w-1/2 p-2 border rounded"
            />
          </div>
          {calculatePriceRange() && (
            <div className="text-sm text-green-700 mt-1">
              مستوى السعر: {calculatePriceRange()}
            </div>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">🗺️ المحافظة:</label>
          <select
            value={governorate}
            onChange={(e) => setGovernorate(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">-- اختر المحافظة --</option>
            <option value="دمشق">دمشق</option>
            <option value="ريف دمشق">ريف دمشق</option>
            <option value="حلب">حلب</option>
            <option value="حمص">حمص</option>
            <option value="اللاذقية">اللاذقية</option>
            <option value="طرطوس">طرطوس</option>
            <option value="درعا">درعا</option>
            <option value="حماة">حماة</option>
            <option value="الحسكة">الحسكة</option>
            <option value="القنيطرة">القنيطرة</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">📍 العنوان:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="مثال: المزة، مشروع دمر..."
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">🛏️ عدد الغرف:</label>
          <select
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">-- اختر --</option>
            <option value="1">1 غرفة</option>
            <option value="2">2 غرف</option>
            <option value="3">3 غرف</option>
            <option value="4">4 غرف</option>
            <option value="5+">5 غرف أو أكثر</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            بحث 🔎
          </button>
        </div>
      </form>
    </div>
  );
}
