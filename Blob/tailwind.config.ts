import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';
import lineClamp from 'windicss/plugin/line-clamp';

const primary = '#0089ff';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        primary: primary,
      },
      width: {
        full: '100%',
        md: '615px',
        lg: '820px',
        xl: '1024px',
        '2xl': '1228px',
      },
      height: {
        header: '60px',
        '100%': '100%',
      },
      backgroundColor: {
        headerColor: '#3D4450',
        primary: primary,
      },
      backgroundImage: {
        header: "url('./src/assets/images/bg1.jpeg')",
        authorBg: "url('./src/assets/images/authorBg.jpeg')",
      },
      backgroundSize: {
        '50%': '50%',
        16: '4rem',
      },
      lineHeight: {
        header: '60px',
      },
      fontFamily: {
        header: ['ysbz'],
      },
      textColor: {
        header: '#dfdfdf',
      },
      animation: {
        changeColor: 'wiggle .25s linear forwards ',
        setShadow: 'cardShadow .25s linear forwards',
      },
      keyframes: {
        wiggle: {
          '0%': { color: '#000' },
          '100%': { color: primary },
        },
        cardShadow: {
          '100%': { 'box-shadow': ' 0 5px 15px -5px rgba(0,0,0,.5)' },
        },
      },
    },
  },
  plugins: [formsPlugin, lineClamp],
});
