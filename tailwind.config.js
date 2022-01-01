module.exports = {
    theme: {
        extend: {
            colors: {
                electric: "#db00ff",
                ribbon: "#0047ff",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
    ],
};
