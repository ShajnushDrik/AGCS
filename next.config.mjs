/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AGCS',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
