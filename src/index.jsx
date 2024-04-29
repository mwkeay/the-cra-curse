/**
 * ===============
 *     Modules
 * ===============
 */

// Importing the React module is required to use JSX syntax in a file
import React from "react";

// React render modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Custom App component
import { App } from "./App";

/**
 * ==============
 *     Render
 * ==============
 */

// Get root <div>
const rootElement = document.getElementById("root"); // The root div is defined in the index.html static file

// Create ReactDOM root from root <div>
const root = createRoot(rootElement);

// Append converted JSX to root <div>
root.render(

    // StrictMode is a React utility that checks for potential problems in the app during development.
    // It helps identify deprecated practices and warns about them, but does not impact the production build.
    // Use StrictMode to ensure your app is ready for future React updates and follows best practices.
    <StrictMode>
        <App />
    </StrictMode>
);
