﻿# About
 
Webpack configuration for ES5/ES6 for Typescript Library or Module.
 
Debug with devTools and test with Jest.
 
This boilerplate consist of minimum configuration and dependencies to create a Module written in Typescript.
 
**Have fun!**

# Install

- Clone this repo, call `git clone https://github.com/aneldev/dyna-ts-module-boilerplate.git my-ts-module`
- Call `npm run create-module` for TS module **or**
- Call `npm run create-module-with-react` for TS module that supports also React components and JSX syntax
- Update `the package.json` with `name`, `version` and `repository.url`
- You are ready!
 
# Develop
 
## General
 
The source code of your project is under the src/ folder only.
 
To developer (or to debug) write your debug code in the `debug/index.ts`, where is the "user" of your project in src/.
 
## Debug
 
There are several options how to debug your application. You can debug it on nodeJs or in any web browser.
 
So you can test your module on how much compatible is in different environments. 
 
### Debug on any web browser with browser's debugger
 
Call `npm run debug-browser` to start the builder and open a dev server (via webpack).
 
Open http://localhost:8027/ address in any browser.
 
_In this case there is no need to start additionally a builder as the other options, webpack takes care of it._
 
You can use any web browser to test it.
 
### Debug on nodeJs with devTools (via node --inspector)
 
Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.
 
Call `npm run debug-devtools` to start the devTools debugger (v8) to debug the build version of your debug/ script.
 
Alternatively, can call `npm run debug-devtools-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.
 
Open chrome://inspect/#devices to list the debuggable instances in your localhost, you should see your app there to debug it.
 
Alternatively, copy paste the link generated from `debug-devtools` call;
it is something like this: chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/659747f3-20d7-45d9-8f8d-48c707d6f5eb
 
The debugger works **only** in Chrome.
 
### Debug on nodeJs with node-debug
 
**Dependency**, you have to `npm install -g node-inspector`
 
Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.
 
Call `npm run debug-inspector` to start and node-debug your app.
 
You can close the devTools and this script will be called again to instantiate new devTools (changes in your code will be loaded at this point).
 
Alternatively, can call `npm run debug-inspector-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.
 
The debugger will start automatically (as web page) in your default browser. The debugger works **only** in Chrome.
 
### Simply run

Call `npm run debug-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `npm run run-debug-build` and will run you debug application on node.js.

The built code, ready to run is under the `debug-ground/debug-on-nodejs` path.  
 
# Test
 
## Write tests
 
For tests the (Jest)[https://facebook.github.io/jest/] is used, check the documentation.
 
Test files can be everywhere but they should have name `*.(test|spec).(ts|tsx|js|jsx)`. There is `tests/` folder if you want to use it but this is not a limitation.
 
You can debug a test file as it is described in Debug section, with a few limitations.
 
## Run tests
 
Call `npm run test` to run your tests and coverage. This test also builds your application, ts errors can be shown here.

Call `npm run test-only` to run your tests only including coverage, no build no ts errors.
 
Call `npm run test-watch` to run your tests on any changes, no build, no ts errors, no coverage.
 
## Debug tests (experimental)
 
Through `debug/index.ts` you can load and also debug tests!
 
There is a small mock library where works like Jest but supports only some of the Jest functions. This is the `debug/mock-jest.js` file where behave like Jest and can run on any browser.
 
It doesn't support all the comparisons and features of the Jest but it helps to debug the test files with some limitations. Feel free to fork it or suggest another way how to debug Jest test files.

Follow the instructions how to debug your application and now you will debug the test.

## Run the test without Jest!

Note: At the time of writing (Aug 2017) Jest is facing issues with async tests, the dropped messages in console doesn't contain info where these errors occurred. Till this get fixed you can alternatively run your tests without Jest if you use only the Jest methods implemented in `debug/mock-jest.js`. 

If you already debug your tests as described above, you can also simply run the test without Jest.

Call `npm run run-debug-build` and you will see the console messages.

If you debug with the cd 
 
# Dist / Release
 
Call `npm run dist` or `npm run release`
to create a distributable version of your project
under the `dist/` folder.
 
The package configuration exports the `dist/` folder so you have to call the `npm run dist` every time you want to publish this package. The typescript declarations are there out of the box.
 
**Tip 1:** During development, there is no need to call `dist` on any code change, you can import the `src/` folder of this module like this: `import {MyModule} from 'my-module/src';` instead of `import {MyModule} from 'my-module';`.
 
**Tip 2:** You can link this module with your main application using the `npm link` for more read https://docs.npmjs.com/cli/link.
 
**Tip 2.1:** With npm > 5.0.0 the above link can be made defining the "file:xxx" instead of version number.
 
# Build
 
The build compiles and builds a version under the `build/`.
 
The built code is not exported or used from the package itself! Use `npm run build` only to see what the webpack has built for use, for debugging reasons only.
 
The built code is exactly the same as the code generated by `npm run dist` but it is not compressed and it can run on any javascript runtimer.
 
# Others
 
## Link your modules easily
 
Npm offers out of the box, link on development time of your project and of your own packages.
 
Instead of using in packages `"my-lovely-component": "file_./../../../myPackages/my-lovely-component"` try https://docs.npmjs.com/cli/link
 
## React
 
This boilerplate includes React components, only to support the jsx syntax. This boilerplate is not intended for  React components. You can work with React and export it, JSX syntax is also supported but there is no friendly environment to develop. For React check (dyna-ts-react-module-boilerplate)[https://github.com/aneldev/dyna-ts-react-module-boilerplate]. You can safely remove the react from this boilerplate.
