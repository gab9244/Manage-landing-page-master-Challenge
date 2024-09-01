import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./Components/App.jsx";
import "./Styles/index.css";
import "./Styles/App.css";
import "./Styles/Header.css";
import "./Styles/Main.css";
import "./Styles/About.css";
import "./Styles/Reviews.css";
import "./Styles/Simplify.css";
import "./Styles/Contact.css";
import "./Styles/Hamburge.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
