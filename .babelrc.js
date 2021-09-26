module.exports = {
  presets: [
    [
      "next/babel",
      "@emotion/babel-preset-css-prop",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: ["@emotion/babel-plugin", "babel-plugin-macros"],
};
