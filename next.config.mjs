/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    experimental: {
        turbo: true,
    },
    reactStrictMode: false, // Disable React Strict Mode if needed
};

export default nextConfig;
