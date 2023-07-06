/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: "https://cdn.topnhacai.today/topnhacai/cdn/",
  images: {
    domains: [
      "78966.app",
      "www.bongdalu.com",
      "vaobo.com",
      "topnhacai.today",
      "api.vaobo.com",
      "topnhacai.b-cdn.net",
      "789b.win",
      "zq.titan007.com",
      "cdn.topnhacai.today",
      "images.dmca.com",
      "dmca.com"
    ],

  },
  env: {
    api: "https://62bbd4adeff39ad5ee15c6d1.mockapi.io/",
    api_topnhacai: "https://api.topnhacai.today/api",
    // api_topnhacai: "http://localhost:8000/api",
    api_isports: "https://isports.thethao789.com/api",
    url_home: "https://topnhacai.today"
  },
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
  },
};

module.exports = nextConfig;
