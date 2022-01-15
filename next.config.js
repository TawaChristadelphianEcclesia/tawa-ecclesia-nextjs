/** @type {import('next').NextConfig} */
module.exports = {
    // swcMinify: true,
    experimental: {
        // concurrentFeatures: true,
        // serverComponents: true,
    },
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

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
