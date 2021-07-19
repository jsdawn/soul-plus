import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './packages/index.js',
  output: [
    {
      globals: { vue: 'Vue' },
      name: 'soul-ui',
      file: 'lib/soul-ui.umd.js',
      format: 'umd'
    },
    {
      name: 'soul-ui',
      file: 'lib/soul-ui.esm.js',
      format: 'es'
    },
    {
      name: 'soul-ui',
      file: 'lib/soul-ui.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [scss(), esbuild(), commonjs(), vue()],
  external: ['vue']
};
