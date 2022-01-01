/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "assets.pesaledger.com",
      "s3.us-west-2.amazonaws.com",
    ],
  },
  swcMinify: true,
};
