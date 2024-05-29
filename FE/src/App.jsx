import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}
