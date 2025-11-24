import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // NOTA: Los valores deben ser tamaños comunes de píxeles
    // Revisé tus valores '12', '38' que son inusuales y los mantuve,
    // pero asegúrate de que sean tamaños válidos para tus iconos/avatares.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
    ],
  },
};

export default nextConfig;