module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  // Needed when using github pages inside organization
  // viteFinal: (config, { configType }) => {
  //   if (configType === 'PRODUCTION') config.base = '/repo-name-inside-org'

  //   return config
  // },
}
