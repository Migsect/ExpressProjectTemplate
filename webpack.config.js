"use strict";

const path = require("path");

/**Webpack will only be utlized for client side code. Otherwise the typescript compiler will be used
 * for server-side code.
 */

module.exports = {
    entry: {
        SimpleJSTest: "./src/client/entry/SimpleJSTest.ts",
    },
    output: {
        filename: "[name].built.js",
        path: path.resolve(__dirname, "public/javascript/built")
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.css/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            path.resolve("./node_modules"),
            path.resolve("./src/client"),
            path.resolve("./src/shared")
        ]
    }
};