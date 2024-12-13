/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devio-rail.up.railway.app",
        port: "",
        pathname: "/blog/**",
      },
    ],
  },
};

export default nextConfig;
