/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

const isCloudflare = process.env.CLOUDFLARE_WORKERS === '1' || process.env.CF_PAGES === '1';

if (isCloudflare) {
  nextConfig.output = 'export';
  nextConfig.distDir = 'out';
  nextConfig.trailingSlash = true;
}

export default nextConfig;
