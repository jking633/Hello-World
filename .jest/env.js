// module.exports = async function() {}

// my-custom-environment
const NodeEnvironment = require('jest-environment-node')

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context)
    // this.testPath = context.testPath
  }

  async setup() {
    await super.setup()
    // await someSetupTasks(this.testPath)
    // this.global.someGlobalObject = createGlobalObject()

    console.log('jest env setup firing ...')
  }

  async teardown() {
    // this.global.someGlobalObject = destroyGlobalObject()
    // await someTeardownTasks()
    await super.teardown()

    console.log('jest env teardown firing ...')
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = CustomEnvironment
