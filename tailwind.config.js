/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm  : '600px',
      md  : '900px',
      lg  : '1200px',
      xl  : '1536px',
      xxl : '1920px',
    },
    extend: {
      colors: {
        surface : 'rgba(58,58,58,0.5)',
        accent  : '#16dc83',
      },
    },
  },
  plugins: [],
}
