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
    },
    backgroundImage: {
      header: "url('./src/assets/images/bg.png')",
    },
    fontFamily: {
      header: ['ysbz'],
    },
  },
  plugins: [formsPlugin],
});
