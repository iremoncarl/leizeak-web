/* @type {import('next').NextConfig} */
/*
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
}

module.exports = nextConfig
*/

const createNextIntlPlugin = require('next-intl/plugin');

//const withNextIntl = createNextIntlPlugin();
const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig);
