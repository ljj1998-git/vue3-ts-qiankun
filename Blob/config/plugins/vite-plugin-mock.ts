import { viteMockServe } from 'vite-plugin-mock';

export const ConfigMockPlugin = () => viteMockServe({
  mockPath: 'mocks',
  localEnabled: true,
});
