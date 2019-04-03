#!/usr/bin/env node

/* eslint-disable no-console, import/no-dynamic-require */

const spawn = require('react-dev-utils/crossSpawn')

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

const argv = process.argv.slice(2)
const nodeArgs = argv.slice(0, 1)
const jestArgs = argv.slice(1)
const result = spawn.sync(
  'node',
  nodeArgs
    .concat(require.resolve(`${__dirname}/jestDebugger.js`))
    .concat(jestArgs),
  { stdio: 'inherit' }
)

if (result.signal) {
  if (result.signal === 'SIGKILL') {
    console.log(
      'The build failed because the process exited too early. ' +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.'
    )
  } else if (result.signal === 'SIGTERM') {
    console.log(
      'The build failed because the process exited too early. ' +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.'
    )
  }
  process.exit(1)
}
process.exit(result.status)
