import { createRoot } from "react-dom/client";
import React from "react";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<h1>Hello, Daniel</h1>);
