// src/components/MessageForm.jsx
import React, { useState } from 'react';

export default function MessageForm({ onSend }) {
  const [to, setTo] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (to && content) {
      onSend({ to, content, date: new Date().toISOString() });
      setTo('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow max-w-md">
      <h2 className="text-lg font-bold mb-2">📨 أرسل رسالة</h2>
      <input
        type="text"
        placeholder="إلى (بريد أو اسم المستخدم)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        placeholder="محتوى الرسالة"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        rows={4}
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        إرسال
      </button>
    </form>
  );
}
