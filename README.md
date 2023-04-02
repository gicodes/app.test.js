# Getting started with Testing, by Gideon Chino
### app.test.js

This Documentation is a subset of the Modern JavaScript Bootcamp course.
- section 32 - 33: The Basics of Testing by Stephen Grider & Colt Steele. 

## What is Testing?
- Testing is basically scrutinizing the functionality of an application.
- Testing is recursively automating this process to improve performance.

## Goals of Testing
- Automate the process of checking if an app works as expected
- Keeps us from manually clicking around our app to find bugs
- Ensures an app works as expected even after changes occur


### SECTION OPERATIONS
In this Section we will:

1. Write a tiny node project
2. Figure out how to test it without an external testing library
3. Figure out how to test it with an external testing library

4. Take a look at a project we built earlier in the course
5. Test it using a testing library

6. Write a custom test framework that works in 80% of projects

### 1. Write a tiny node project: HI-DASH  
To write our custom test library, Hi-dash, we may need a reference.
Hi-dash will implement a couple functions from the lo_dash library.

  _.ForEach(collection, [iterator])

  _.map(collection, [iteratee])


### 2. Test it without an external library
The test library implemented in this section contains (2) basic functions as defined above.
The forEach method, and the map method: both tested, and works without an external library.


### 3. Test it with an external library: MOCHA
Mocha is a feature-rich Javascript test framework running on Node.js and in the browser.
The aim of this section is to run a Mocha framework against our hi-dash test library.

Note:
This section and operation was completed. To implement it, follow the steps below.

1. Install the Mocha library
npm install -g Mocha | npx install Mocha

2. Go to our hi-dash library
enter index.test.js and change the "test()" function to "it()"

3. Run mocha test on terminal
enter the workspace terminal and run "mocha index.test.js"


### 4. See project we built earlier in the course: MOVIES
The movies project was built on Vanilla Javascript and CSS. 
It was written, and later modified to Film-Farm by gi codes.
The o,g project was released to github and deployed to Vercel.


### 5. Test it using an external library: MOCHA && ASSERTIONS
The aim of this section is to test portions of the project functionality.
Autocomplete.js is one functionality to be tested and perhaps re-asserted.


### 6. Write a custom browser-based test framework: TME | TEST ME
To successfully write a browser-based test framework, we need to architecture.
TME or 'test me' will prioritize the following artitectural pattern and rules.

The first half of these rules (1-3), if applied, will implement the rest (4-6).

1. Must be a Node-based CLI framework
2. Must be basic implementation setup
3. Must be able to test browser-based JS apps (!important)

4. Must be able to test full application not just snippets
6. CLI must automatically find and run all 'test.js' files
5. CLI must use a 'watch mode' to avoid restarting the app


### 1. Node-based CLI framework integration

To run code or chunk of codes as a CLI tool, do a CLI setup.

In your app, create an index file. You may call it index.js.

* At the top, initialize your binary environment
* #!/usr/bin/env node
________________________________________________

In your app directory, install a package manager. 
For npm, run 'npm init -y'

* Go to package.json file, add the environment initialized
* "bin": { "tme": "index.js" }
__________________________________________________________

npm link | symlink targets package as a dependency in our cwd.

* Under the app directory, in your terminal, run 'npm link'
* -> tme npm link
___________________________________________________________

Note: 
if you get 'npm ERR! code EACCES | symlink npm ERR' when you run command, see
http://npm.github.io/installation-setup-docs/installing/a-note-on-permissions


### 2. Basic Implementation setup steps

For a basic implementation, these steps or rules must apply.

* File Collection`
Find all files ending with 'test.js' recursively, through a folder
Stores the references to each found file
After getting a full list of test files, execute one after another
* Test environment setup 
We managed this process by introducing a sample project to our cwd
In the sample project, it && beforeEach functions were implemented
The purpose is to run test on sample objects using mocha functions 
* Test file execution
Run test as async function, recursively iterate through test files 
Implement -global it && beforeEach functions used earlier by mocha
global.beforeEach takes and push(fn)- global.it takes desc, runs fn
* Report results
We utilised try and catch method to handle and log errors occurred
Console.log('\t', error.message) to clearly display error messages
We introduced chalk library for better formatting (colors) of logs

Note: As at this time of writing, Chalk ^5 has changed to ESM only. 
If you try to require in chalk and it fails, run npm i chalk@4.1.2.


### 3. Running Browser-based JS apps

In a nutshell, browser-based execution can be a bit trickish.
This is because node.js does not directly interact with a DOM.
That means we have to use a specific approach: JS-DOM library.

JSDOM is a pure-JavaScript implementation of many web standards.
The aim of JSDOM is to emulate enough of a subset of web browsers 
To be useful for testing, and scraping real-world web applications.

* To install the JSDOM library using npm, run 'npm install jsdom'
  
const jsdom = require('jsdom'); 
// gets the absolute jsdom library

const { JSDOM } = require('jsdom'); 
// destructures the relative JSDOM constructor

Now we have a jsdom library and JSDOM, we can now create a new instance.

  const dom = await JSDOM.fromFile(filepath, {
    runScripts: 'dangerously',
    resources: 'usable'
  });
  return dom;

!! Note: 

Only run the script 'dangerously' when feeding the DOM code you know is safe. 
If you are running untrusted Node.js code, your machine could be compromised.
Since we want to execute external script included via <script src='index.js'>
We can use the option, resources: 'usable' as an effective way to load script.

* At this point, our test framework- tme;

### 4. tests full applications, not just snippets

### 5. automatically finds and runs all 'test.js' files

### 6. uses a watch mode to avoid restarting the app

# Written & Documented by Gideon, I
