// src/pages/Support.jsx
import React from "react";

export default function Support() {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">التواصل والدعم</h2>
      <p className="mb-4 text-gray-700">
        يمكنك التواصل معنا عبر مواقع التواصل الاجتماعي التالية:
      </p>

      <ul className="flex gap-6 mb-8 text-gray-700">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61577573535834" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.594 1.323-1.326V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
            فيسبوك
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/myhome.syr/" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-pink-600 hover:underline"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-3a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
            انستغرام
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@myhome.sy" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-black hover:underline"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.004 2.002v7.815c-.2 0-.396-.01-.586-.027a4.326 4.326 0 00-4.19 3.27 4.35 4.35 0 004.179 5.516 4.306 4.306 0 004.12-3.57h2.582a6.848 6.848 0 01-6.105 5.059A6.885 6.885 0 016.474 14.7a6.874 6.874 0 01.004-12.69h5.526z" />
            </svg>
            تيكتوك
          </a>
        </li>
      </ul>

      <p className="mb-4 text-gray-700">
        للدعم الفني، الرجاء التواصل عبر البريد الإلكتروني:
      </p>
      <a
        href="mailto:infomyhome.sy@gmail.com" // تم تحديث رابط البريد الإلكتروني هنا
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        infomyhome.sy@gmail.com
      </a>
    </div>
  );
}