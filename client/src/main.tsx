import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAntiInspection } from "./lib/anti-inspect";

// Initialize client-side anti-inspection & tamper resistance
initAntiInspection();

createRoot(document.getElementById("root")!).render(<App />);
