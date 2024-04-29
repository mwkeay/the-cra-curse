# mwkeay/`the-cra-curse`

> Source code and examples for University of Portsmouth Student SEC Conference Talk: "*The CRA Curse: React Frameworks and Selling Your Soul to Dependency Hell*"

## Commands

| Command | Description | Equates To
| - | - | -
| `npm run dev` | Run the client from a development server. | `webpack-dev-server --config webpack.dev.js`
| `npm build` | Compile source code to a distributable folder. | `webpack --config webpack.prod.js`

> **Note:** `npm start` does nothing in this setup. To run the distributable client application, open `dist/index.html` in the browser. 