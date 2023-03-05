const chalk = require('chalk');

// Base logger for index.js (tme)
const consoleLog = () => {

  console.log(chalk.grey('tme: Running'));
  console.log(chalk.grey('____________'));
  console.log(chalk.grey('            '));
}

module.exports = consoleLog;