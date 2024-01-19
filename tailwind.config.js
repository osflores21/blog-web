/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        smalt: {
          50: '#f0f4fe',
          100: '#dde6fc',
          200: '#c3d3fa',
          300: '#9ab8f6',
          400: '#6a93f0',
          500: '#476eea',
          600: '#314fdf',
          700: '#293dcc',
          800: '#2733a6',
          900: '#28348f',
          950: '#1b1f50',
        },
      },
    },
  },
  plugins: [],
}
