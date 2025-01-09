import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        activeColor: '#ef8535',
      },
      boxShadowColor: {
        default: '[0_10px_30px_#000]',
      },
      backgroundImage: {
        bgImg: "url('/bg.jpg')",
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
};
export default config;
