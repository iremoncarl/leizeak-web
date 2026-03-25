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


//Se importa el plugin de next-intl
const createNextIntlPlugin = require('next-intl/plugin');

//Se inicializa el plugin de next-intl indicando la ruta del archivo de configuración
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

//Se exporta la configuración de Next.js envuelta con el plugin de next-intl
//Esto integra la internacionalización en toda la aplicación
module.exports = withNextIntl(nextConfig);
