# About
 
Universal Webpack setup for ES5/ES6 for Typescript Module.

Debug with devTools and test with Jest.
 
This boilerplate consist of minimum configuration and dependencies to create a Module written in Typescript.

**Have fun!**

# Features

- Write in Typescript, .tsx, .ts, but also .jsx & .js are supported
- Test with Jest, snapshots are also supported
- Distribute as module with TypeScript Definitions (ready to import)
- Distributed versions works in Javascript and Typescript projects
- Export default version targeting web or not
- Export additional version for web and node
- Detect circular dependencies (where leads to import `undefined` or `null` values)

# Install

```
git clone https://github.com/aneldev/dyna-ts-module-boilerplate.git my-ts-module
cd my-ts-module
npm run create
```

# Zero-Configuration

No need to configure anything!

But if there is need, you have to edit only these point:

## Webpack Loaders/Rules

Add them in `/webpack.loaders.js`.

## Webpack Plugins

Add them in `/webpack.plugins.js`.

## Outputs, universalize your module

Edit the `/module-setup.js` to configure the target of your module and multiple outputs.

Be default these versions are exported

- "my-module" where targets to web
- "my-module/web" where targets to web
- "my-module/node" where targets to node

For more read the "Universal stories" next in this text.

# Develop
 
## General
 
The source code of your module is under the `src/` folder.

Under the `dev` folder you create a demo application that uses module.

Under the `tests` folder you create the tests for your module.

You can debug both `dev` and `tests` (the last one with some limitations) on browser and node enviroments. 
 
## Debug
 
Create an demo application under the `dev` folder that uses your module.

There are several options how to debug your application. You can debug it on nodeJs or in any web browser.
 
### Debug on any web browser with browser's debugger
 
Call `npm run debug-dev-browser` to start the builder and open a dev server (via webpack).
 
Open http://localhost:3300/ address in any browser.
 
_In this case there is no need to start additionally a builder as the other options, webpack takes care of it._
 
You can use any web browser to test it.

### Debug on nodeJs with devTools

Call `npm run debug-dev-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `npm run debug-dev-devtools` to start and debug with the devTools debugger of your Chrome browser.

Alternatively, you can call `npm run debug-dev-devtools-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.

Open [chrome://inspect/#devices](chrome://inspect/#devices) to list the debuggable instances in your localhost, you should see your app there to debug it.

### Run debug code

Call `npm run debug-dev-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `npm run debug-dev-run` and will run you debug application on node.js.

The built code, ready to run is under the `debug-ground/debug-dev-on-nodejs` path.  
 
# Test
 
## Write tests
 
For tests the [Jest](https://facebook.github.io/jest) is used, check the documentation.
 
Test files can be everywhere but they should have name `*.(test|spec).(ts|js)`. There is `tests/` folder if you want to use it but this is not a limitation.
 
## Run tests
 
Call `npm run test` to run your tests and coverage. This test also builds your application, ts errors can be shown here.

Call `npm run test-only` to run your tests only including coverage, no build no ts errors.
 
Call `npm run test-watch` to run your tests on any changes, no build, no ts errors, no coverage.

### Debug test with devtools

- Run `debug-tests`

You may pass any Jest arguments

# Dist / Release
 
Call `npm run build`
to create a distributable version of your project
under the `dist/` folder.
 
The package configuration exports the `dist/` folder so you have to call the `npm run build` every time you want to publish this package. The typescript declarations are there out of the box.

Call `npm run release` to build, publish to npm and push to your repo.

# Universal stories

## Webpack `target: "universal"`

Webpack `target: "universal"` **doesn't exist** for far.

It's a [big story](https://github.com/webpack/webpack/issues/6525) and the core problem is not the output itself but the `libraryTarget`. How universal will be the output of the libraryTarget?

Till the above issue is solved, we have to export two versions, one for web and one for node and import each time the proper version according the environment.

Target the output to `web` and `node`.

## Why this separation?

There are two limitations:
- Webpack builds different the registration of your module per environment.
- You module itself might need different resources per environment.

## Setup

Open the `/module-setup.js` and configure which versions will be exported.

This boilerplate exports by default 2 more variations of your module a `web` and and a `node` version.

|Source file|Target|Import example|
|----|----|----|
|`src/index.ts`|module-setup.jsdefaultTarget|import {...} from "dyna-node";|
|`src/web.ts`|web|import {...} from "dyna-node/web";|
|`src/node.ts`|node|import {...} from "dyna-node/web";|

If you focus for only one environment, edit the `/module-setup.js`.

## How to import

The user of your module can import() conditionally your web and node exports.

```
// Import the default export, this will be used only for types and will be not bundled.
import {MyModule} from "my-module";

// Import the module, the web or the node version according the environment
const importMyModule = async (): Promise<any> => {
  const isNode = !!(typeof process !== 'undefined' && process.versions && process.versions.node);
  return isNode
    ? await import("my-module/node")
    : await import("my-module/web");
};

// Generic function to extract the exported stuff of the module with types!
const importFrom = async <TExportMember>(importModule: () => Promise<any>, exportName: string): Promise<TExportMember> => {
  const module = await importModule();
  const output = module[exportName];
  if (!output) console.error(`internal error: cannot get the import member [${exportName}]`, {module});
  return output;
};

// Somewhere in your code import (async) from the loaded module
const _MyClass = await importFrom<typeof MyClass>(importMyModule, "MyClass");

// and that's it, now instantiate it (plus, we have types for it)
const myClass = new _MyClass();
```

## Real example

A live and working example for it is the `dyna-disk-memory`. This module when it runs on node it saves the data to disk while when it runs on web browse it uses the localstorage. The implementation for both environments is completetelly different but the API is the exactly the same.

The `dyna-queue-handler` is handling a job queue and it uses the `dyna-disk-memory` to save the queue (to reduce the ram resources).

The export of `dyna-disk-memory` is done [here](https://github.com/aneldev/dyna-disk-memory/tree/master/src).

The import of it in `dyna-queue-handler` is done [here](https://github.com/aneldev/dyna-queue-handler/blob/master/src/DynaQueueHandler.ts#L6) and the instantiation in the `_initialize()` is [here](https://github.com/aneldev/dyna-queue-handler/blob/master/src/DynaQueueHandler.ts#L6) .

# Others

## Link your modules easily

In case that the `npm link` doesn't work correctly this boilerplate offers a ready sync unidirectional mechanism.

0. Copy `./syncExternalsList.sample.js` to `./syncExternalsList.js` once only. 
1. Update the `./syncExternalsList.js` list with external apps you want to keep them sync.
2. Call `npm run sync-externals`

If you use the Ubuntu shell of Win10, in the `./syncExternalsList.js` you can add a windows path prefixing it with the `*tus*`, _which stands for `to ubuntu shell`_.

Example, check the 2nd line of `./syncExternalsList.sample.js`.

**Note:** the `./syncExternalsList.js` is git ignored! 

## Bundle node_modules

By default all node_modules are excluded from the builder. This means that are not in the bundle. 

For debugging reasons... you might want to include them.

In order to include them, edit the webpack.xxx.config.js and comment the `externals: [nodeExternals()]` line.

If you want to exclude specific modules _while are not so clean like `pg`, `helmet`, `express`_, exclude them like this: `externals: ['helmet', 'pg', 'express']`. 

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
