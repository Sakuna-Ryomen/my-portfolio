import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
import Skills from './Contexts/SkillContext.jsx';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Skills>
      <App />
    </Skills>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
);
