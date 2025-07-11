import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com", protocol: 'https' },
      { hostname: 'learningdevelopmentcontent.s3.us-west-1.amazonaws.com', protocol: "https" }
    ]
  }
};

export default nextConfig;
