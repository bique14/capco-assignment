module.exports = {
  content: ['./src/*.tsx', './src/**/*.tsx', './src/**/**/*.tsx'],
  theme: {
    extend: {},
    screens: {
      xs: { max: '359px' },
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'cursive'],
      prompt: ['Prompt', 'sans-serif'],
    },
  },
  plugins: [],
};
