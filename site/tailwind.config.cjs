/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: {
          900: '#0b1221',
          800: '#121b2e',
          700: '#1b2438',
          500: '#2f3f66'
        },
        signal: {
          400: '#4dd2c0',
          500: '#2fbfa9',
          600: '#25a993'
        },
        accent: {
          400: '#f8ba5f',
          500: '#f7a53a'
        }
      },
      boxShadow: {
        card: '0 18px 40px rgba(0,0,0,0.16)'
      },
      backgroundImage: {
        'noise-texture':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};
