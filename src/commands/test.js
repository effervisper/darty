const shellSpawn = require("../shellSpawn");
const path = require("path");
const pathFinder = require("../utils/pathFinder");
const log = require("../log");

function test() {
  const jestConfigPath = pathFinder(
    "./jest.config.js",
    path.resolve(__dirname, "../../etc/config/jest.config.js"),
  );

  log(`jest config located in ${jestConfigPath}`);
  shellSpawn(path.resolve(__dirname, "../../node_modules/.bin/jest"), [
    "--config",
    jestConfigPath,
    "--rootDir",
    "./",
  ]);
}

module.exports = test;
