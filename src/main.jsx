// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Providers from "./providers/index.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Providers>
    <App />
  </Providers>
  // </StrictMode>
);
