module.exports = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../common/**/*.stories.@(js|jsx|ts|tsx)",
        "../modules/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/react",
    core: {
        builder: "webpack5",
    },
    webpackFinal: (config) => {
        // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test.test(".svg")
        );
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/,
            enforce: "pre",
            loader: require.resolve("@svgr/webpack"),
        });

        return config;
    },
    typescript: {
        reactDocgen: false,
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        },
    },
};
