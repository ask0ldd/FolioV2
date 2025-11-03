import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = ["./src/**/*.{html,ts,tsx}"];
export const theme = {
  screens: {
    xs: '30rem', // 480px
    sm: '40rem', // 640px
    md: '50.625rem', // 810px
    lg: '64rem', // 1024px
    xl: '75rem', // 1200px
  },
  extend: {
    colors: {
      'main-green': '#004746',
    },
    boxShadow: {
      custom: '0px 4px 8px rgba(0,0,0,0.5)',
    },
    fontFamily: {
      'dm-sans': ['DM Sans', ..._fontFamily.sans],
      'inter': ['Inter', ..._fontFamily.sans],
      'dancing': ['Dancing Script', 'cursive'],
      'instrument': ['Instrument Serif', 'serif'],
    },
  },
};
export const plugins = [];