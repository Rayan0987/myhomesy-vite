// src/pages/Settings.jsx
import React from "react";

export default function AccountSettings() {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">إعدادات الحساب</h2>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold" htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            className="w-full border rounded p-3"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="password">كلمة المرور</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full border rounded p-3"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="notifications">الإشعارات</label>
          <select
            id="notifications"
            className="w-full border rounded p-3"
            defaultValue="enabled"
          >
            <option value="enabled">مفعلة</option>
            <option value="disabled">معطلة</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          حفظ التغييرات
        </button>
      </form>
    </div>
  );
}
