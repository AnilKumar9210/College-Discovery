import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { SavedCollegesProvider } from "./Context/SavedCollegesContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <SavedCollegesProvider>
      <App />
      </SavedCollegesProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);