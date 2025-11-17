/** @type {import('next').NextConfig} */
// const nextConfig = {};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Localhost (during development)
      {
        protocol: "http",
        hostname: "localhost",
        port: "5500",
        pathname: "/**",
      },

      // Dev server domains
      {
        protocol: "https",
        hostname: "skyline-hospitals.dev5.intersmarthosting.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.skyline-hospitals.dev5.intersmarthosting.in",
        pathname: "/**",
      },

      // Production admin domain
      {
        protocol: "https",
        hostname: "admin.skylinehospitals.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.admin.skylinehospitals.co.uk",
        pathname: "/**",
      },

      // YouTube thumbnails or embedded images
      {
        protocol: "https",
        hostname: "www.youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com", // YouTube image CDN
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /pdf\.worker(\.min)?\.js$/,
      use: {
        loader: "file-loader",
        options: { name: "[name].[contenthash].[ext]" },
      },
    });

    return config;
  },
};

export default nextConfig;
