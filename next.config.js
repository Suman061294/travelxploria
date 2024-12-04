/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['digi.rangrotopack.com'],
    },
    // eslint: {
    //     ignoreDuringBuilds: true, // Optional: Ignore ESLint errors during production builds
    // },
    // typescript: {
    //     ignoreBuildErrors: true, // Optional: Ignore TypeScript errors during production builds
    // },
    // experimental: {
    //     optimizeFonts: true, // Optimize font loading
    // },
    // env: {
    //     API_URL: process.env.API_URL || 'https://default-api.com', // Add your environment variables
    // },
};

module.exports = nextConfig;
