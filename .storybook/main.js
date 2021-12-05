const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve('../src'),
      assets: resolve('../src/assets'),
      style: resolve('../src/style'),
      packages: resolve('../packages'),
    };

    // return the customized config
    return config;
  },
};