# About

Webpack configuration for ES5/ES6 Javascript and/or Typescript Library or Module. 

Debug with devTools and test with Jest.

This boilerplate consist of minimum configuration and dependencies to create a Module written in Javascript and/or Typescript.

**Have fun!**

# Release

Call `npm run dist` or `npm run release` 
to create a distributable version of your project 
under the dist/ folder.

# Develop

## General

The source code your project is under the src/ folder only.

To developer (or to debug) write your debug code in the debug/index.ts, where is the "user" of your project in src/.
 
## Debug

There are several options how to debug your application. You can debug it on nodeJs or in any browser. So you can test your module how much compatible is in different enviroments.  

### Debug on any web browser with browser's debugger

Call `npm run debug-browser` to start the builder and open a dev server (via webpack). 
 
Open http://localhost:8027/ address in any browser. 

_In this case there is no need to start additionally a builder as the other options, webpack takes care of it._

### Debug on nodeJs with devTools (via node --inpector)

Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.
 
Call `npm run debug-devtools` to start the devTools debugger (v8) to debug the build version of your debug/ script.

Alternatively, can call `npm run debug-devtools-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.

Open chrome://inspect/#devices to list the debuggable instances in your localhost, you should see your app there to debug it. 

Alternatively, copy paste the link generated from `debug-devtools` call. it is something like this: chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/659747f3-20d7-45d9-8f8d-48c707d6f5eb 
 
### Debug on nodeJs with node-debug (you have to `npm install -g node-inspector`)

Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `npm run debug-inspector` to start and node-debug your app.
You can close the devTools and this script will be called again to instantiate new devTools (changes in your code will be loaded at this point).

Alternatively, can call `npm run debug-inspector-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.

The debugger will start automatically (as web page) in your default browser. The debugger works **only** in Chrome. 

# Test

The test are running only under nodeJs enviroment. 
Test files can be anywhere in the module and should have name *.(test|spec).(ts|tsx|js|jsx) 

Call `npm run test` to run your tests under \__test\__/ folder (using the Jest test framework).

Call `npm run test-watch` to run your tests on change of your script.

# Build

To build call `npm run build`, the output will be at build/ folder. You can use build for debugging.

# Others

## Link your modules easily

Npm offers out of the box, link on development time of your project and of your own packages. 

Instead of use in packages `"my-lovely-component": "file_./../../../myPackages/my-lovely-component"` try https://docs.npmjs.com/cli/link