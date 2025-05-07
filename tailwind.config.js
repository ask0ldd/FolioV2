const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-green': '#004746',
      },
      boxShadow: {
        custom: '0px 4px 8px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'dancing': ['Dancing Script', 'cursive'],
        'instrument': ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
};