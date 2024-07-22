/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/v1/(.*)",
        destination: "/api/proxy",
      }
    ];
  },
};

export default nextConfig;
