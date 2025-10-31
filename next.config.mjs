/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-def51e1b98d44d72bdcb4a29c7cb693e.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
