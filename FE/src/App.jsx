import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PizzaPage from "./pages/PizzaPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<PizzaPage />} />
      </Routes>
    </Router>
  );
}
