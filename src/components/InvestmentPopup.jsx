// src/components/InvestmentPopup.jsx
import React from 'react';

export default function InvestmentPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl relative border border-blue-100">
        <button
          onClick={onClose}
          className="absolute top-2 left-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-700 text-right">💼 لماذا الاستثمار عبر MyHome.sy موثوق؟</h2>
        <ul className="list-disc pl-5 text-gray-800 text-right space-y-2 leading-loose text-[15px]">
          <li>معلومات شفافة عن كل مشروع: صور، موقع دقيق، العوائد المتوقعة، والجدول الزمني.</li>
          <li>شارة ✅ "تم التحقق منه" للمشاريع التي تمت مراجعتها ميدانياً من فريقنا.</li>
          <li>ربط مباشر مع الشركة المطورة: معلومات التواصل والموقع الإلكتروني.</li>
          <li>عرض فيديو تعريفي أو جولة 360° لزيادة الثقة بالموقع والمشروع.</li>
          <li>آراء وتجارب مستثمرين سابقين لزيادة الشفافية.</li>
          <li>نحن لا نعد بالعوائد، بل نضمن صحة المعلومات وربطك بالمصدر الرسمي فقط.</li>
        </ul>
      </div>
    </div>
  );
}
