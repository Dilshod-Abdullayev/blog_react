import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mode__context from "./context/ModeContext";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Mode__context>
        <App />
      </Mode__context>
    </BrowserRouter>
  </HelmetProvider>
);
