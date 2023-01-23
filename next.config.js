/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: `/${encodeURIComponent("كيف")}`,
        destination: `/How-To`,
      },

      {
        source: `/${encodeURIComponent("مواضيع")}`,
        destination: `/Topics`,
      },
      {
        source: `/${encodeURIComponent("ندوات - تدريبيّة")}`,
        destination: `/Webinars`,
      },
      {
        source: `/${encodeURIComponent("القاموس")}`,
        destination: `/Glossary`,
      },
    ];
  },
};

module.exports = nextConfig;
