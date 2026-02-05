import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./utils/i18n";
import { InitContextProvider } from "@contexts/InitContext/InitContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InitContextProvider>
      <App />
    </InitContextProvider>
  </StrictMode>,
);
