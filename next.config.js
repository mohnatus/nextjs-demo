/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w-dog.ru",
      },
    ],
    deviceSizes: [1021],
    imageSizes: [371, 391]
  },
};

module.exports = nextConfig;
