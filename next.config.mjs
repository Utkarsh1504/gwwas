/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "groww.in" }, {hostname:"fakestoreapi.com"}],
  },
};

export default nextConfig;
