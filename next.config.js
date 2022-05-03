/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    "URL":"http://localhost:3000",
    "MONGODB_URL":"mongodb://localhost:27017"
  }
}

module.exports = nextConfig
