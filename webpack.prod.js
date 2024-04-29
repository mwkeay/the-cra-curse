/**
 * ===============
 *     Modules
 * ===============
 */

// Function to merge production config with base config
const { merge } = require("webpack-merge");

// Webpack plugin to add static files from `./public` to build
const CopyPlugin = require("copy-webpack-plugin");

// Base config
const common = require("./webpack.common.js");

/**
 * =====================
 *     Configuration
 * =====================
 */

// Production configuration
const prod = {

    mode: "production",

    // Source maps link minified build code to the original source code for debugging.
    // "hidden-source-map" hides source maps from end-users, also reducing bundle size.
    // Note: For debugging production errors, consider using "source-map" instead to make source maps visible.
    devtool: "hidden-source-map",

    plugins: [

        // Webpack plugin to add static files from `./public` to build
        new CopyPlugin({
            patterns: [
                // Ignores index.html as HtmlWebpackPlugin handles index.html
                { from: "public", to: ".", globOptions: { ignore: ["**/index.html"] } },
            ],
        }),

    ],

};

// Merge production config with base config
const merged = merge(common, prod);

// Export merged config
module.exports = merged
