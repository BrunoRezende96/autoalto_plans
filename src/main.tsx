import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App";

// const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const convex = new ConvexReactClient(
  "https://academic-dolphin-985.convex.cloud"
);

createRoot(document.getElementById("root")!).render(
  <ConvexAuthProvider client={convex}>
    <App />
  </ConvexAuthProvider>,
);
