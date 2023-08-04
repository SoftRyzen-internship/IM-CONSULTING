/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory during production builds (next build)
  },
};

module.exports = nextConfig;
