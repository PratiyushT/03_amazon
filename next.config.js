/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "links.papareact.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
