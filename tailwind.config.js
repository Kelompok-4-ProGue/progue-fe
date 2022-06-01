module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        // prettier-ignore
        'ds': '1110px',
      },
      screens: {
        // prettier-ignore
        'xl': '1110px',
      },
      colors: {
        // prettier-ignore
        'black': '#020E33',
        // prettier-ignore
        'light-blue': '#CCE1FF',
        'white-blue': '#E6EDF3',
        'light-white': '#F6FBFF',
        // prettier-ignore
        'blue': {
          'light': '#eff6ff',
          DEFAULT: '#006AFE',
          'dark': '#1e3a8a',
        },
        // prettier-ignore
        'gray': {
          DEFAULT: '#787D8D',
        },
        // prettier-ignore
        'input': '#E6EDF3',
      },
      fontSize: {
        // prettier-ignore
        // display
        'ds-lg': ['57px', '64px'],
        'ds-md': ['45px', '52px'],
        'ds-sm': ['36px', '44px'],
        // headline
        'hl-lg': ['32px', '40px'],
        'hl-md': ['28px', '36px'],
        'hl-sm': ['24px', '32px'],
        // title
        'tl-lg': ['22px', '28px'],
        'tl-md': ['16px', '24.15px'],
        'tl-sm': ['14px', '20.1px'],
        // label
        'lb-lg': ['14px', '20.1px'],
        'lb-md': ['12px', '16.5px'],
        'lb-sm': ['11px', '16.5px'],
        // body
        'bd-lg': ['16px', '24.15px'],
        'bd-md': ['14px', '20.25px'],
        'bd-sm': ['12px', '16.4px'],
      },
      fontFamily: {
        sans: [
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      dropShadow: {
        // prettier-ignore
        'c': '-4px 4px 50px rgba(0, 48, 119, 0.1)',
      },
    },
  },
  plugins: [],
};
