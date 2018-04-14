const run = require("@magic/test")

const types = require("./spec")
const prettierConfig = require("./prettier")

const tests = {
  types,
  prettierConfig
}

run(tests)
