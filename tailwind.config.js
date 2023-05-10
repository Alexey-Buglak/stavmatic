/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '480px' },
      vsm: { max: '320px' },

      // REVERSE //
      lgR: { min: '1024.1px' },
      mdR: { min: '768.1px' },
      smR: { min: '480.1px' },
      xxlR: { min: '2000.1px' },
    },
    container: {
      padding: '15px',
      center: true,
    },
    extend: {
      colors: {
        //***** WHITE THEME *****//
        blue: '#4A66CD',
        white: '#FFFFFF',
        darkWhite: 'rgba(228, 231, 236, 0.5)',
        blueLight: '#DDE5F5',
        darkBlue: '#0C0A48',
        gray: '#627080',
        lightGray: '#929EAA',

        //***** DARK THEME *****//
        dMBlue: '#222B4F',
        dMWhite: '#E9E9F3',
        dMBlackBlue: '#1E2333',
        dMBlackBlueBg: '#1D1F27',
        dMLightBlue: '#708EF',
        dMGray: '#ACACB7',
      },
    },
  },
  plugins: [],
}
