module.exports = {
    output: 'export',
    reactStrictMode: true,
    basePath: "/Frontend",
    assetPrefix: "/Frontend",
    images: {
        loader: "akamai",
        path: "",
    },
    experimental: {
        optimizeFonts: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};