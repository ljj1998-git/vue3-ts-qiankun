import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        primary: '#0089ff',
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
      },
      backgroundImage: {
        header: "url('./src/assets/images/bg1.jpeg')",
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
    },
  },
  plugins: [formsPlugin, require('@tailwindcss/line-clamp')],
});
