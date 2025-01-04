/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem',
        '6.5xl': '4rem',
      },
      lineHeight: {
        'tight': '1.1',
      },
    },
  },
  plugins: [],
};
