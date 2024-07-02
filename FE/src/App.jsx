import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/RegisterPage";
import AdminHome from "./admin/AdminHome";
import NotFoundPage from "./pages/NotFoundPage";
import ChangeWrapperPage from "./pages/ChangeWrapperPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/error/404" element={<NotFoundPage />} />
        <Route path="/*" element={<ChangeWrapperPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}
