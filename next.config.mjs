/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "omojet.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.omojet.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "test.omojet.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
