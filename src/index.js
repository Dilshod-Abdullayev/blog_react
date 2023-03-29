import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mode__context from "./context/ModeContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Mode__context>
      <App />
    </Mode__context>
  </BrowserRouter>
);
