/** @type {import('next').NextConfig} */
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
