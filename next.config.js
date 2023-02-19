const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = withVanillaExtract(nextConfig);
