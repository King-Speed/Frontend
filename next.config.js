module.exports = {
    output: 'export',
    reactStrictMode: true,
    basePath: "/nextjs-pages",
    assetPrefix: "/nextjs-pages",
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