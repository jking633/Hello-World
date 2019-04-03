/* eslint-disable no-console, import/no-dynamic-require */

const jest = require('jest')

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

const argv = process.argv.slice(2)
const jestConf = require('../jest.config.js')
jestConf.collectCoverage = false

const args = [`--config=${JSON.stringify(jestConf)}`, ...argv]

jest.run(args)
