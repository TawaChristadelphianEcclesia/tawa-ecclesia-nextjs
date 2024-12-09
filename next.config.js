/** @type {import('next').NextConfig} */
module.exports = {
    // swcMinify: true,
    experimental: {
        // concurrentFeatures: true,
        // serverComponents: true,
    },
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        domains: [
            "images.prismic.io",
            "tawa-ecclesial-website.cdn.prismic.io",
            "res.cloudinary.com",
        ],
    },
};
