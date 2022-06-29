const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.ts"),
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: {
            name: "NpoPlayer",
            type: "commonjs-module",
            export: "default",
        },
    },
    experiments: {
        outputModule: true,
    },
};
