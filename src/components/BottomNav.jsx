// src/components/BottomNav.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, PlusCircle, MessageCircle, User } from "lucide-react";
import AccountMenu from "./AccountMenu";
import ModalLogin from "./ModalLogin";

export default function BottomNav() {
  const [openAccount, setOpenAccount] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  function handleLoginSuccess() {
    setShowLogin(false);
    navigate("/add");
  }

  return (
    <>
      {openAccount && <AccountMenu onClose={() => setOpenAccount(false)} />}
      {showLogin && (
        <ModalLogin
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow z-50 sm:hidden">
        <div className="flex justify-around items-center h-16 text-sm text-gray-600">
          <button
            onClick={() => {
              setOpenAccount(false);
              navigate("/");
            }}
            className="flex flex-col items-center"
          >
            <Home size={20} />
            الرئيسية
          </button>
          <button
            onClick={() => {
              setOpenAccount(false);
              setShowLogin(true);
            }}
            className="flex flex-col items-center"
          >
            <PlusCircle size={20} />
            إضافة عقار
          </button>
          <button
            onClick={() => {
              setOpenAccount(false);
              navigate("/messages");
            }}
            className="flex flex-col items-center"
          >
            <MessageCircle size={20} />
            الرسائل
          </button>
          <button
            onClick={() => setOpenAccount(!openAccount)}
            className="flex flex-col items-center relative"
          >
            <User size={20} />
            حسابي
          </button>
        </div>
      </nav>
    </>
  );
}
