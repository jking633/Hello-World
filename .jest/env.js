// module.exports = async function() {}

// my-custom-environment
const NodeEnvironment = require('jest-environment-node')

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context)
    this.testPath = context.testPath
  }

  async setup() {
    await super.setup()
    await someSetupTasks(this.testPath)
    this.global.someGlobalObject = createGlobalObject()
  }

  async teardown() {
    this.global.someGlobalObject = destroyGlobalObject()
    await someTeardownTasks()
    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = CustomEnvironment
