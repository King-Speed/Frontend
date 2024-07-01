module.exports = {
    output: 'export',
    reactStrictMode: true,
    basePath: "",
    assetPrefix: "",
    images: {
        loader: "akamai",
        path: "",
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};