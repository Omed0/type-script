/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverComponentsExternalPackages: ["@prisma/client"],
    },
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
}

module.exports = nextConfig
