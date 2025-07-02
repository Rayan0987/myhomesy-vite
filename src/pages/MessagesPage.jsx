import React from 'react';

export default function MessagesPage() {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">الرسائل</h2>
      <div className="bg-white shadow rounded p-4">
        <div className="mb-4 border-b pb-2">
          <p className="font-semibold text-gray-800">من: المستخدم 123</p>
          <p className="text-gray-600">مرحباً، هل العقار لا يزال متاحاً؟</p>
        </div>
        <div className="mb-4 border-b pb-2">
          <p className="font-semibold text-gray-800">من: المستخدم 456</p>
          <p className="text-gray-600">هل يمكنني رؤية صور إضافية من الداخل؟</p>
        </div>
      </div>
    </div>
  );
}
