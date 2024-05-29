import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="bg-green" onClick={() => navigate("/pizza")}>
        go to pizza page
      </button>
    </div>
  );
}
