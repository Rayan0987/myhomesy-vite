// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-gray-100 text-gray-600 py-2 mt-16">
      <div className="container mx-auto px-0 text-center">
        <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-2 text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=61577573535834"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/myhome.syr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@myhome.sy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="mailto:infomyhome.sy@gmail.com"
            className="hover:text-red-500"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} MyHome.sy - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
