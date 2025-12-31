/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agcs.edu.bd',
      },
      {
        protocol: 'https',
        hostname: 'www.agcs.edu.bd',
      },
    ],
  },
};

export default nextConfig;/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agcs.edu.bd",
      },
      {
        protocol: "https",
        hostname: "www.agcs.edu.bd",
      },
    ],
  },
}

export default nextConfig

