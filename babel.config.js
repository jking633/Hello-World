const commonPresets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
      modules: false,
    },
  ],
  '@babel/react',
]

const commonPlugins = [
  // [
  //   '@babel/plugin-transform-runtime',
  //   {
  //     // polyfill: false, // no longer needed with Babel 7
  //     regenerator: true,
  //   },
  // ],
  // ['@babel/plugin-proposal-export-default-from'],
  // ['@babel/plugin-syntax-dynamic-import'],
]

module.exports = {
  env: {
    development: {
      compact: false,
      presets: [...commonPresets],
      plugins: [...commonPlugins],
    },
    production: {
      compact: true,
      presets: [...commonPresets],
      plugins: [...commonPlugins],
    },
    test: {
      compact: false,
      presets: [...commonPresets],
      plugins: [...commonPlugins],
    },
  },
}
