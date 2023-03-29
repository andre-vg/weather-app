import React from "react";
import ReactDOM from "react-dom/client";
import Avatar from "../Avatar";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="absolute w-full h-full bg-neutral-200">
      <App />
    </div>
  </React.StrictMode>
);
