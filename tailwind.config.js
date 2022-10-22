/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'rgb(255,255,230)',
      blue: 'rgb(0,0,255)',
      black: 'rgb(51,51,51)',
    },
    fontSize: {
      small: ['18px', '20.5px'],
    },
    extend: {
      animation: {
        marquee: 'marquee 50s linear infinite',
        marquee2: 'marquee2 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  plugins: [],
}
