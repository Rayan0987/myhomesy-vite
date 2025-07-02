import React from "react";

export default function CallToAction() {
  return (
    <div className="mt-16 bg-blue-100 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        هل تملك عقارًا أو مشروعًا؟
      </h2>
      <p className="mb-6 text-gray-600">أضف عقارك أو مشروعك الآن واجعله مرئيًا للمشترين المهتمين</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="/add-property"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          نشر عقار
        </a>
        <a
          href="/add-project"
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-black"
        >
          أضف مشروعك
        </a>
      </div>
    </div>
  );
}
