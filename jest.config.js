module.exports = {
  globalSetup: './.jest/setup.js', // set config objects for jest & puppeteer
  globalTeardown: './.jest/teardown.js', // closes puppeteer browser
  rootDir: './',
  setupFilesAfterEnv: [
    '<rootDir>/.jest/testSetupFile.js', // comes after testEnvironment - env.js
  ],
  testEnvironment: './.jest/env.js', // calls both setup.js & teardown.js
}