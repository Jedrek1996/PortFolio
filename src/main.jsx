import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BackgroundAnimation from "./components/BackgroundAnimation/backgroundAnimation.jsx";
import { AuraBackground } from "./components/BackgroundAnimation/auraBackground.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AuraBackground />
    <BackgroundAnimation />
  </React.StrictMode>
);
