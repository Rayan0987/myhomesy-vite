import React from "react";
import { useNavigate } from "react-router-dom";

export default function ModalAddOptions({ onClose }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow p-6 w-72 text-center">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">ماذا تريد أن تضيف؟</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleNavigate("/add")}
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
          >
            إضافة عقار
          </button>
          <button
            onClick={() => handleNavigate("/add-project")}
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
          >
            إضافة مشروع
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 mt-2 hover:underline"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
