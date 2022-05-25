import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
    height: {
      header: '60px',
      '100%': '100%',
    },
    backgroundImage: {
      header: "url('./src/assets/images/bg1.jpeg')",
    },
    fontFamily: {
      header: ['ysbz'],
    },
  },
  plugins: [formsPlugin],
});
