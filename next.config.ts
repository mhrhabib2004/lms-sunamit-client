import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'wallpapers.com', 'cdn.somesite.com','plus.unsplash.com'], // List trusted domains here
  },
};

export default nextConfig;
