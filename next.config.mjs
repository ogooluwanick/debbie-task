/** @type {import('next').NextConfig} */
const nextConfig = {
        reactStrictMode: true,
        swcMinify: true,
        serverRuntimeConfig: {
                maxPayloadSize: 10 * 1024 * 1024,  // Increase the maximum body size to 10 MB (default is 1 MB)
        },
        images: {
                domains: ["i.pinimg.com"],
        },
}

export default nextConfig;
