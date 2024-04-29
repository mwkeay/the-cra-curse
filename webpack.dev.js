/**
 * ===============
 *     Modules
 * ===============
 */

// Function to merge development config with base config
const { merge } = require("webpack-merge");

// Base config
const common = require("./webpack.common.js");

/**
 * =====================
 *     Configuration
 * =====================
 */

// Development configuration
const dev = {

    mode: "development",

    // Source maps link minified build code to the original source code for debugging.
    // "eval-source-map" offers a balance of build performance and debuggability, ideal for development.
    devtool: "eval-source-map",

    // Development server configuration
    devServer: {

        // Server port number (e.g. "3000" serves client at http://localhost:3000)
        port: "3000",

        // Serve static files from "./public"
        static: ["./public"],

        // Prevents automatically opening the client in browser.
        // Note: Change to `true` for default behaviour.
        open: false,
        
        // Enables Hot Module Replacement (live reloads without a full page refresh)
        hot: true,
        
        // Enables automatic reloading of the page when changes are made to the source code
        liveReload: true,
        
    },
};

// Merge development config with base config
const merged = merge(common, dev);

// Export merged config
module.exports = merged;
