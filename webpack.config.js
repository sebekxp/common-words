const path = require("path");

module.exports = {
    entry: {
        a: "D:\\Projekty\\COMMON\\common-words\\src\\js\\contentOfWord.js",
        b: "D:\\Projekty\\COMMON\\common-words\\src\\js\\favorites.js",
        c: "D:\\Projekty\\COMMON\\common-words\\src\\js\\flashCards.js",
        d: "D:\\Projekty\\COMMON\\common-words\\src\\js\\navigationWord.js",
        e: "D:\\Projekty\\COMMON\\common-words\\src\\js\\searchBox.js",
        f: "D:\\Projekty\\COMMON\\common-words\\src\\js\\utils.js"
    },
    output: {
        path: path.resolve(__dirname, "./out"),
        filename: "bundle.js"
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
};