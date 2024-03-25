/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    PROJECT_ID : process.env.PROJECT_ID,
  }
};

export default nextConfig;
