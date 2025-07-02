// src/admin/UserRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import MyProperties from "./MyProperties";
import MyProjects from "./MyProjects";
import UserMessages from "./UserMessages";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/properties" element={<MyProperties />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/messages" element={<UserMessages />} />
      <Route path="*" element={<Navigate to="/user" />} />
    </Routes>
  );
}
