// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PropertyDetails from "./pages/PropertyDetails";
import AddProperty from "./pages/AddProperty";
import Login from "./pages/Login";
import BottomNav from "./components/BottomNav";
import SearchPage from "./pages/SearchPage";
import SearchResultsPage from "./pages/SearchResultsPage";  
import Terms from "./pages/Terms";
import Tips from "./pages/Tips";
import About from "./pages/About";
import MortgageCalculator from "./pages/MortgageCalculator";
import AdminRoutes from "./admin/AdminRoutes";
import MessagesPage from "./pages/MessagesPage";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import MyProperties from "./pages/MyProperties";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-cairo">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/add" element={<AddProperty />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} /> 
          <Route path="/terms" element={<Terms />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/about" element={<About />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/my-properties" element={<MyProperties />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      <BottomNav />
    </div>
  );
}
