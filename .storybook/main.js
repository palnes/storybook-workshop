module.exports = {
  stories: [
    '../examples/**/*.stories.mdx',
    '../examples/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    './addons/storybook-theme-toggle/register',
  ],
  framework: '@storybook/react',
  core: {
    // builder: '@storybook/builder-webpack5',
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
    disableTelemetry: true,
  },
};
