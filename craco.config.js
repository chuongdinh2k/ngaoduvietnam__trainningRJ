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
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@redux": path.resolve(__dirname, "./src/redux"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@demos": path.resolve(__dirname, "./src/Demos"),
            "@api": path.resolve(__dirname, "./src/api"),
        },
    },
};
