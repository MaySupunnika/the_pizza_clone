import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChangePage from "./pages/ChangePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ChangePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
