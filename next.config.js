/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true, // Optional: for production builds
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.devtool = 'source-map'
    }
    // config.optimization.minimize = false

    return config
  },
}

module.exports = nextConfig
