const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Computer Modern Serif', ...defaultTheme.fontFamily.serif],
        mono: ['MonoLisa', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        orange: {
          DEFAULT: '#FC6443',
          '50': '#FFF9F8',
          '100': '#FFE8E4',
          '200': '#FEC7BB',
          '300': '#FDA693',
          '400': '#FD856B',
          '500': '#FC6443',
          '600': '#FB360C',
          '700': '#CC2703',
          '800': '#941C02',
          '900': '#5D1201'
        },
        california: {
          DEFAULT: '#F89E07',
          '50': '#FDE4BA',
          '100': '#FCDCA6',
          '200': '#FBCD7E',
          '300': '#FABD56',
          '400': '#F9AE2F',
          '500': '#F89E07',
          '600': '#C17B05',
          '700': '#8B5804',
          '800': '#543602',
          '900': '#1E1301'
        },
        rose: {
          DEFAULT: '#FD0D7A',
          '50': '#FFC3DE',
          '100': '#FEAFD3',
          '200': '#FE86BD',
          '300': '#FE5EA6',
          '400': '#FD3590',
          '500': '#FD0D7A',
          '600': '#D0025F',
          '700': '#990146',
          '800': '#61012C',
          '900': '#290013'
        },
        blue: {
          DEFAULT: '#6B57FF',
          '50': '#FFFFFF',
          '100': '#FBFAFF',
          '200': '#D7D1FF',
          '300': '#B3A9FF',
          '400': '#8F80FF',
          '500': '#6B57FF',
          '600': '#3A1FFF',
          '700': '#1B00E6',
          '800': '#1500AE',
          '900': '#0E0076'
        },
        azure: {
          DEFAULT: '#087CFA',
          '50': '#BCDBFE',
          '100': '#A8D1FD',
          '200': '#80BCFC',
          '300': '#58A6FC',
          '400': '#3091FB',
          '500': '#087CFA',
          '600': '#0461C6',
          '700': '#03468F',
          '800': '#022B58',
          '900': '#011021'
        },
        'shark': {
          DEFAULT: '#27282C',
          '50': '#7E818D',
          '100': '#747783',
          '200': '#61636D',
          '300': '#4D4F57',
          '400': '#3A3C42',
          '500': '#27282C',
          '600': '#0D0D0E',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [],
}