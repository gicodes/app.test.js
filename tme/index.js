#!/usr/bin/env node

// console this log to confirm connection
const consoleLog = require('./console.log');
consoleLog();

// File Collection
const Runner = require('./runner');

const runner = new Runner();

const run = async () => {

  // finds all files under current directory
  await runner.collectFiles(process.cwd());
  runner.runTests();
}

run();