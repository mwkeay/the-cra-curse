/**
 * ===============
 *     Modules
 * ===============
 */

const path = require("path");

// Webpack plugin to use hashed filenames in `index.html`
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * =====================
 *     Configuration
 * =====================
 */

// Common configuration
const common =  {

    // Entry point for running the application
    entry: "./src/index.js",

    // Output configuration
    output: {

        // Specify distributable folder
        path: path.resolve(__dirname, "dist"),

        // Add hash to filename to avoid cached `main.js` errors
        filename: "main.[contenthash].js",
    },

    // Set to use Webpack's environment specific additions.
    // Read more in Webpack's docs: https://webpack.js.org/concepts/targets/.
    target: "web",

    // Specify file types to resolve
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },

    module: {

        rules: [

            {
                // Babel loader for JavaScript and JSX files
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },

            {
                // CSS loader for CSS files
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },

    plugins: [

        // Replaces "main.js" with "main.[contenthash].js" in index.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),

    ],
};

// Export
module.exports = common;
