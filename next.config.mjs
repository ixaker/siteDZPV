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
