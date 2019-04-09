const commonPreset = ['@babel/env', '@babel/react']

module.exports = {
  env: {
    development: {
      compact: false,
      presets: [...commonPreset],
    },
    production: {
      compact: true,
      presets: [...commonPreset],
    },
    test: {
      compact: false,
      presets: [...commonPreset],
    },
  },
}
