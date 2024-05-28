import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToggleProvider } from "./contexts/toggleContext.jsx";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>
);
