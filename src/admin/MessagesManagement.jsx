// src/admin/MessagesManagement.jsx
import React, { useState } from "react";

const dummyUsers = ["أحمد", "ليلى", "سامي"];
const initialMessages = {
  أحمد: [{ from: "أنت", text: "مرحباً أحمد" }],
  ليلى: [{ from: "ليلى", text: "كيف حالك؟" }],
  سامي: [],
};

export default function MessagesManagement() {
  const [selectedUser, setSelectedUser] = useState("أحمد");
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const updated = {
      ...messages,
      [selectedUser]: [
        ...messages[selectedUser],
        { from: "أنت", text: newMessage },
      ],
    };
    setMessages(updated);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen p-4 gap-4">
      {/* قائمة المحادثات */}
      <div className="w-1/4 bg-white shadow rounded p-2">
        <h2 className="font-bold text-lg mb-2">المحادثات</h2>
        {dummyUsers.map((user) => (
          <div
            key={user}
            onClick={() => setSelectedUser(user)}
            className={`p-2 cursor-pointer rounded ${
              selectedUser === user ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
            }`}
          >
            {user}
          </div>
        ))}
      </div>

      {/* محتوى المحادثة */}
      <div className="flex-1 bg-white shadow rounded flex flex-col">
        <div className="p-4 border-b font-bold text-xl">{selectedUser}</div>
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {messages[selectedUser]?.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded max-w-xs ${
                msg.from === "أنت"
                  ? "bg-blue-200 self-end ml-auto"
                  : "bg-gray-100 self-start"
              }`}
            >
              <span className="text-sm text-gray-700">{msg.from}:</span> {msg.text}
            </div>
          ))}
        </div>
        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded p-2"
            placeholder="اكتب رسالة..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            إرسال
          </button>
        </div>
      </div>
    </div>
  );
}
