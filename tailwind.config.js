
module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        10:'#EFF6FF',
        11:'#1E40AF',
        12:'#1D4ED8',
        20:'#DBEAFE',
        30: '#BFDBFE',
        40:'#1E3A8A',
        50: '#85d7ff',
        100: '#1fb6ff',
        200: '#009eeb',
      },
      gray: {
        1:'#111827'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    rotate: {
      '-90': '-90deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
}
