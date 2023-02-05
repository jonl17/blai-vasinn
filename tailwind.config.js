const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      clarendonRegular: ['Clarendon Regular'],
      clarendonBold: ['Clarendon Bold'],
      graebenbachRegular: ['Graebenbach Regular'],
      graebenbachRegularItalic: ['Graebenbach Regular Italic'],
      graebenbachMonoRegular: ['Graebenbach Mono Regular'],
    },
    colors: {
      white: 'rgb(255,255,230)',
      blue: 'rgb(0,0,255)',
      black: 'rgb(51,51,51)',
      red: 'red',
      green: 'green',
    },
    fontSize: {
      '18/20.5': ['18px', '20.5px'],
      '29/32': ['29px', '32px'],
      '50/52': ['50px', '52px'],
      '3vw/0.55': ['3vw', '0.55'],
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
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.blue-image-filter': {
          filter:
            'invert(8%) sepia(97%) saturate(7490%) hue-rotate(197deg) brightness(100%) contrast(143%)',
        },
      })
    }),
  ],
}
