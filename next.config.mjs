// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export', // Включение статической генерации
  images: {
    unoptimized: true, // Отключает API оптимизации изображений
  },
  webpack(config) {
    // Добавление правила для загрузки SVG как React компонента
    config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-react-loader'],
    });

    // Возвращаем измененную конфигурацию
    return config;
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export', // Статический экспорт
//   reactStrictMode: true,
//   trailingSlash: true, // Опционально

//   // Настройки изображений
//   images: {
//     unoptimized: true, // Отключаем встроенную оптимизацию
//     domains: [], // Если используете внешние CDN
//     formats: ['image/webp'], // Указываем поддерживаемые форматы
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Размеры устройств
//     imageSizes: [16, 32, 64, 96, 128, 256, 384], // Базовые размеры
//   },

//   // Настройки Webpack
//   webpack(config) {
//     // Оптимизация SVG (если используете)
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });

//     // Оптимизация сборки
//     config.optimization = {
//       ...config.optimization,
//       splitChunks: {
//         chunks: 'all',
//         maxSize: 244 * 1024, // 244KB
//       },
//     };

//     return config;
//   },
// };

// export default nextConfig;
