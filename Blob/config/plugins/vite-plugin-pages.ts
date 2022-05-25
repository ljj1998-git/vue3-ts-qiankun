import Pages from 'vite-plugin-pages';

export const ConfigPagesPlugin = () => Pages({
  dirs: [{ dir: 'src/views', baseRoute: '' }],
  importMode: 'async',
});
