module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        mallanna: ['Mallanna'],
      },
      colors: {
        cyan: {
          950: '#3969A0'
        }
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
