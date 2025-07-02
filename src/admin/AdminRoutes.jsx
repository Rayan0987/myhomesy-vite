import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import PropertiesManagement from "./PropertiesManagement";
import UsersManagement from "./UsersManagement";
import ProjectsManagement from "./ProjectsManagement";
import MessagesManagement from "./MessagesManagement";
import AdminSidebar from "./AdminSidebar";

export default function AdminRoutes() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return <Navigate to="/admin-login" />;
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/properties" element={<PropertiesManagement />} />
          <Route path="/users" element={<UsersManagement />} />
          <Route path="/projects" element={<ProjectsManagement />} />
          <Route path="/messages" element={<MessagesManagement />} />
        </Routes>
      </div>
    </div>
  );
}
