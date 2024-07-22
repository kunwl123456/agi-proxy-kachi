/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/(.*)",
        destination: "/api/wikipedia"
      },
      {
        source: "/v1/(.*)",
        destination: "/api/proxy",
      }
    ];
  },
};

export default nextConfig;
