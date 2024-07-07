import React from "react";
import ReactDOM from "react-dom/client";

// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

// What are the map components?
//	They are a collection of custom elements
//	that let you compose HTML to build an application.

import App from "./App.tsx";
import "./index.css";

defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
