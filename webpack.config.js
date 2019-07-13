const path = require("path");

module.exports = {
    entry: {
        bundle: ["./src/js/navigationWord.js",
            "./src/js/favorites.js",
            "./src/js/searchBox.js",
            "./src/js/flashCards.js",
            "./src/js/contentOfWord.js",
            "./src/js/utils.js",
            "./src/js/examples.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    watch: false,
    mode: "development",
    module: {
        rules: [
            {
                exclude: [
                    path.resolve(__dirname, "./src/js/objectWord.js")]
            }
        ]
    }
};