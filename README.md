# About
 
Universal Webpack setup for ES5/ES6 for Typescript Module.

Debug with devTools and test with Jest.
 
This boilerplate consists of minimum configuration and dependencies to create a Module written in Typescript.

**Have fun!**

# Features

- Write in Typescript, .tsx, .ts, but also .jsx & .js are supported
- Test and debug Jest
- Distribute as a module with TypeScript Definitions (ready to import)
- Distributed versions work in Javascript and Typescript projects
- Export default version targeting web or not
- Export separated versions for web and node (optional)
- Export in commonJs and esNext module together
- Detect circular dependencies (where leads to import `undefined` or `null` values)

# Install

```
git clone https://github.com/aneldev/dyna-ts-module-boilerplate.git my-ts-module
cd my-ts-module
yarn run create
```

# Zero-Configuration

No need to configure anything!

But if there is a need, you have to edit only these points:

## Webpack Loaders/Rules

Add them in `/webpack.loaders.js`.

## Webpack Plugins

Add them in `/webpack.plugins.js`.

## Distributions

By default, these versions exported:

- "my-module" used only to import types
- "my-module/commonJs/web" commonJs version where targets to web
- "my-module/commonJs/node" commonJs version where targets to node
- "my-module/esNext/web" es version where targets to web
- "my-module/esNext/node" es version where targets to node

The `node` and `web` are JS files produced by the root files of the src.

If you don't want web/node different versions but only one, edit the `tsconfig.json` at `files` to build only the `src/index.tsx`. No other change needed.

# Develop
 
## General
 
The source code of your module is under the `src/` folder.

Under the `dev` folder, you create a demo application that uses the module.

Under the `tests` folder, you create the tests for your module.

## Debug
 
Create a demo application under the `dev` folder that uses your module.

There are several options on how to debug your application. You can debug it on nodeJs or in any web browser.
 
### Debug on any web browser with browser's debugger
 
Call `yarn debug-dev-browser` to start the builder and open a dev server (via webpack).
 
Open http://localhost:3300/ address in any browser.
 
_In this case, there is no need to start adding a builder as the other options, webpack takes care of it._
 
You can use any web browser to test it.

### Debug on nodeJs with devTools

Call `yarn debug-dev-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `yarn debug-dev-devtools` to start and debug with the devTools debugger of your Chrome browser.

Alternatively, you can call `yarn debug-dev-devtools-brk` (with -brk at the end) to place a breakpoint on the app's startup to catch early points.

Open [chrome://inspect/#devices](chrome://inspect/#devices) to list the debuggable instances in your localhost. You should see your app there to debug it.

### Run debug code

Call `yarn debug-dev-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `yarn debug-dev-run` and will run your debug application on node.js.

The built code, ready to run is under the `debug-ground/debug-dev-on-nodejs` path.  
 
# Test
 
## Write tests
 
For tests, the [Jest](https://facebook.github.io/jest) used, check the documentation.
 
Test files can be everywhere, but they should have the name `*.(test|spec).(ts|js)`. There is `tests/` folder if you want to use it but this is not a limitation.
 
## Run tests
 
Call `yarn test` to run your tests and coverage.

Call `yarn test-watch` to run your tests on any changes.

### Debug test with devtools

- Run `debug-tests`

You may pass any Jest arguments.

# Dist / Release

## General
 
Call `yarn build`
to create a distributable version of your project
under the `dist/` folder.
 
The package configuration exports the `dist/` folder so you have to call the `yarn build` every time you want to publish this package. The typescript declarations are there out of the box.

Call `yarn release` to build, publish to npm and push to your repo.

## `commonJs` && `esNext`

The dist version is consisted of two different build, `commonJs` && ``esNext``.

The default export of the `package.json` is ts `commonJs` build.

One of the big differences between these two versions is that `esNext` improves the [Webpack's shake tree](https://webpack.js.org/guides/tree-shaking/).

`yarn build` uses the TSC compiler

# Features

## Link with `sync-usages-watch`

### About

Link your modules easily with the `sync-usages-watch` watcher script.

In case that the `yarn link` doesn't work for any reason, this boilerplate offers a "copy" approach to update the packages.

The script performs:

- Scans deeply for usages of this package in all siblings folders
- Updates all usages with the content of this package, excluding the `node_modules` of this package
- Before the copy clears the target `src` && `dist` folders

### Run

- Call `yarn sync-usages-watch`

### Prerequisite

For all except Mac desktops, y>ou have to install the `rsync` on your system. _See below how to do it._

## Link with `sync-file-deps-watch`

### About

This is the opposite of the `sync-usages-watch`. It doesn't sync the usaged of this package but it update the dependencies of this package that have "file:" as version.

Yarn by default links only on `yarn upgrade` the file dependencies. Use the `sync-usages-watch`.

The script performs:

- Watched the changes of the dependencies
- Deletes, recreates and copies all items of the dependency folder (as it defined in the `file:`)
- It doesn't copy the `node_modules` folder.

### Run

- Call `yarn sync-file-deps-watch`

### Prerequisite

For all except Mac desktops, y>ou have to install the `rsync` on your system. _See below how to do it._

## About the `rsync` prerequisite

You have to install the `rsync` on your system.
- For Mac you don't need to do anything, it is already there.
- For Linux [follow this guide](https://www.hostinger.com/tutorials/how-to-use-rsync)
- For Windows's _not a clear guid ahs been found, feel free to fork this doc._ 

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
