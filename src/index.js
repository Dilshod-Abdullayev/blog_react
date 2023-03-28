import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mode__context from "./context/ModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Mode__context>
    <App />
  </Mode__context>
);
