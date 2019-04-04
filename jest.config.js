module.exports = {
  rootDir: './',
  testEnvironment: './.jest/env.js', // calls both setup.js & teardown.js
  setupFilesAfterEnv: [
    '<rootDir>/.jest/testSetupFile.js', // comes after testEnvironment - env.js
  ],
  // testEnvironment: './.jest/env.js', // calls both setup.js & teardown.js
  testEnvironment: 'jest-environment-jsdom-global',
  globals: {
    window: true,
    jsdom: true,
  },
  testURL: 'http://mylocal',
  globalSetup: './.jest/setup.js', // set config objects for jest & puppeteer
  globalTeardown: './.jest/teardown.js', // closes puppeteer browser
}
