const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@enums": path.resolve(__dirname, "./src/enums"),
            "@containers": path.resolve(__dirname, "./src/Container"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@configs": path.resolve(__dirname, "./src/Configs"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@layouts": path.resolve(__dirname, "./src/Layouts"),
            "@styles": path.resolve(__dirname, "./src/styles"),
        },
    },
};
