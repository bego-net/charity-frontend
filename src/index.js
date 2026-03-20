import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import App from "./App";

// ✅ ADD THIS
import { BrowserRouter } from "react-router-dom";

// ✅ your i18n
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);