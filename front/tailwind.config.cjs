/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nav: '#2c2c2c',
        backcolor: '#d9d9d9',
        card: '#ededed',
        btn: '#4618ac',
      },
      flex: {
        mid: '0.5 0.5 0%',
      },
    },
  },
  plugins: [],
}
