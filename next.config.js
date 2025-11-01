/** @type {import('next').NextConfig} */
module.exports = { reactStrictMode: true };
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      // Страницы убрали — перенаправляем:
      { source: "/reviews", destination: "/", permanent: true },       // отзывы только на главной
      { source: "/contacts", destination: "/#contacts", permanent: true }, // контакты — якорь на главной
    ];
  },
};

module.exports = nextConfig;
