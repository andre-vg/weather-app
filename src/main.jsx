import React from "react";
import ReactDOM from "react-dom/client";
import Avatar from "../Avatar";
import App from "./App";
import Content from "./Content";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
      <Content />
  </React.StrictMode>
);
