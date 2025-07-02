// src/pages/AddProperty.jsx
import React from "react";

export default function AddProperty() {
  return (
    <div className="p-4 pb-24">
      <h2 className="text-2xl font-semibold text-center mb-6">إضافة عقار</h2>
      <form className="space-y-4 max-w-xl mx-auto bg-white p-6 rounded shadow">
        <select className="w-full border p-2 rounded">
          <option value="">اختر المحافظة</option>
          <option value="دمشق">دمشق</option>
          <option value="ريف دمشق">ريف دمشق</option>
          <option value="حلب">حلب</option>
          <option value="حمص">حمص</option>
          <option value="حماة">حماة</option>
          <option value="اللاذقية">اللاذقية</option>
          <option value="طرطوس">طرطوس</option>
          <option value="درعا">درعا</option>
          <option value="السويداء">السويداء</option>
          <option value="القنيطرة">القنيطرة</option>
          <option value="إدلب">إدلب</option>
          <option value="دير الزور">دير الزور</option>
          <option value="الرقة">الرقة</option>
          <option value="الحسكة">الحسكة</option>
        </select>

        <input
          type="text"
          placeholder="الموقع / الحي"
          className="w-full border p-2 rounded"
        />
        <select className="w-full border p-2 rounded">
          <option value="">اختر عدد الغرف</option>
          <option value="1">1 غرفة</option>
          <option value="2">2 غرف</option>
          <option value="3">3 غرف</option>
          <option value="4">4 غرف</option>
          <option value="5">5 غرف أو أكثر</option>
        </select>
        <input
          type="number"
          placeholder="المساحة بالمتر المربع"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="السعر (ل.س)"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="سنة البناء"
          className="w-full border p-2 rounded"
        />

        <div>
          <label className="block mb-2 font-medium">وسائل الراحة</label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" value="مصعد" />
              <span>مصعد</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="تدفئة مركزية" />
              <span>تدفئة مركزية</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="شرفة" />
              <span>شرفة</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="موقف سيارات" />
              <span>موقف سيارات</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="تكييف" />
              <span>تكييف</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="مطبخ مجهز" />
              <span>مطبخ مجهز</span>
            </label>
          </div>
        </div>

        <input
          type="file"
          multiple
          className="w-full border p-2 rounded bg-gray-50"
        />

        <textarea
          rows="6"
          placeholder="الوصف"
          className="w-full border p-2 rounded"
        ></textarea>

        <input
          type="text"
          placeholder="رقم الجوال أو واتساب للتواصل"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          نشر العقار
        </button>
      </form>
    </div>
  );
}
