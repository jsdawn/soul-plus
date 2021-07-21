import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import css from 'rollup-plugin-css-only';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import commonjs from 'rollup-plugin-commonjs';

const inputs = [
  {
    input: 'packages/index.js',
    name: 'soul-ui'
  },
  {
    input: 'packages/DropdownMenu/index.js',
    name: 'so-dropdown-menu'
  },
  {
    input: 'packages/DropdownItem/index.js',
    name: 'so-dropdown-item'
  },
  {
    input: 'packages/Button/index.js',
    name: 'so-button'
  }
];

export default inputs.map(item => ({
  input: path.resolve(__dirname, item.input),
  output: [
    // {
    //   globals: { vue: 'Vue' },
    //   name: 'soul-ui',
    //   file: 'lib/soul-ui.umd.js',
    //   format: 'umd'
    // },
    {
      name: item.name,
      file: `es/${item.name}.js`,
      format: 'es'
    },
    {
      name: item.name,
      file: `lib/${item.name}.js`,
      format: 'cjs',
      exports: 'named'
    }
  ],
  plugins: [
    scss(),
    css(),
    vue({ css: false }),
    commonjs(),
    nodeResolve(),
    esbuild()
  ],
  external: ['vue']
}));
