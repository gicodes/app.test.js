const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const render = require('./render');

const forbidden = ['node_modules',];

class Runner {
  constructor() {
    this.testFiles = [];
  }

  async runTests() {
    for (let file of this.testFiles) {

      console.log(chalk.grey
        (`---- running ${file.shortName}`))

      const beforeEaches = [];

      global.render = render;

      global.beforeEach = fn => {
        beforeEaches.push(fn);
      }

      global.it = async (desc, fn) => {
        beforeEaches.forEach(func => func());
        try {
          await fn();
          console.log(chalk.green(`OK - ${desc}`));
        } catch (err) {
          const message = err.message
            .replace(/\n/g, '\n\t\t');
          console.log(chalk.red(`X - ${desc}`));
          console.log(chalk.red('\t', message));
        }
      }
      try {
        require(file.name)
      } catch (err) {
        console.log(chalk.red('\t', err));
      }

    }
  }

  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);

    for (let file of files) {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      if (stats.isFile() && file.includes('.test.js')) {
        this.testFiles.push({ name: filepath, shortName: file });
      } else if (stats.isDirectory() && !forbidden.includes(file)) {
        const childFiles = await fs.promises.readdir(filepath);

        files.push(...childFiles
          .map(f => path.join(file, f)
          )
        )
      }
    }
    return (files);
  }
}

module.exports = Runner;