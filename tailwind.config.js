/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'skin-color': '#ec1839',
        'bg-black-900': '#f2f2fc',
        'bg-black-100': '#fdf9ff',
        'bg-black-50': '#e8dfec',
        'text-black-900': '#302e4d',
        'text-black-700': '#504e70',
      },
      fontFamily: {
        'baloo': ['"Baloo Bhai 2"', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'clicker-script': ['"Clicker Script"', 'cursive'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}