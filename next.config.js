/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.wsj.net", "a57.foxnews.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
