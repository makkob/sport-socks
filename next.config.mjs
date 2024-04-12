/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        unoptimized:true
      },
};

export default nextConfig;
