// src/components/ModalLogin.jsx
import React from "react";

export default function ModalLogin({ onClose, onLoginSuccess }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-11/12 max-w-sm text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4">تسجيل الدخول</h2>
        <p className="text-sm text-gray-600 mb-6">يرجى تسجيل الدخول للمتابعة</p>
        <button
          onClick={() => {
            onLoginSuccess();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full w-full"
        >
          تسجيل الدخول
        </button>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 text-sm underline"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
}
