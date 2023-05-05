/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1500px',
        'lx': '1365px',
        'ms': '490px',
      },
      colors: {
        'my-blue': '#2828F9',
        'my-white': '#F8F9FC',
        'my-gray': '#ECECEC',
        'my-black': '#1B1B1A',
      },
    },
  },
  plugins: [],
}
