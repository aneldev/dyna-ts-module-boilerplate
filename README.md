# About
 
Universal Webpack setup for ES5/ES6 for Typescript Module.

Debug with devTools and test with Jest.
 
This boilerplate consist of minimum configuration and dependencies to create a Module written in Typescript.

**Have fun!**

# Features

- Write in Typescript, .tsx, .ts, but also .jsx & .js are supported
- Test and debug Jest, snapshots are also supported
- Distribute as module with TypeScript Definitions (ready to import)
- Distributed versions works in Javascript and Typescript projects
- Export default version targeting web or not
- Export additional version for web and node
- Detect circular dependencies (where leads to import `undefined` or `null` values)

# Install

```
git clone https://github.com/aneldev/dyna-ts-module-boilerplate.git my-ts-module
cd my-ts-module
yarn run create
```

# Zero-Configuration

No need to configure anything!

But if there is need, you have to edit only these point:

## Webpack Loaders/Rules

Add them in `/webpack.loaders.js`.

## Webpack Plugins

Add them in `/webpack.plugins.js`.

## Distributions

By default these versions are exported

- "my-module" used only to import types
- "my-module/commonJs/web" commonJs version where targets to web
- "my-module/commonJs/node" commonJs version where targets to node
- "my-module/esNext/web" es version where targets to web
- "my-module/esNext/node" es version where targets to node

The `node` and `web` are JS files that produced by the root files of the src.

# Develop
 
## General
 
The source code of your module is under the `src/` folder.

Under the `dev` folder you create a demo application that uses module.

Under the `tests` folder you create the tests for your module.

## Debug
 
Create an demo application under the `dev` folder that uses your module.

There are several options how to debug your application. You can debug it on nodeJs or in any web browser.
 
### Debug on any web browser with browser's debugger
 
Call `yarn debug-dev-browser` to start the builder and open a dev server (via webpack).
 
Open http://localhost:3300/ address in any browser.
 
_In this case there is no need to start additionally a builder as the other options, webpack takes care of it._
 
You can use any web browser to test it.

### Debug on nodeJs with devTools

Call `yarn debug-dev-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `yarn debug-dev-devtools` to start and debug with the devTools debugger of your Chrome browser.

Alternatively, you can call `yarn debug-dev-devtools-brk` (with -brk at the end) to place a breakpoint on startup of the app to catch early points.

Open [chrome://inspect/#devices](chrome://inspect/#devices) to list the debuggable instances in your localhost, you should see your app there to debug it.

### Run debug code

Call `yarn debug-dev-build` to start the builder. This builder watches your changes made in debug/ & src/ folders.

Call `yarn debug-dev-run` and will run you debug application on node.js.

The built code, ready to run is under the `debug-ground/debug-dev-on-nodejs` path.  
 
# Test
 
## Write tests
 
For tests the [Jest](https://facebook.github.io/jest) is used, check the documentation.
 
Test files can be everywhere but they should have name `*.(test|spec).(ts|js)`. There is `tests/` folder if you want to use it but this is not a limitation.
 
## Run tests
 
Call `yarn test` to run your tests and coverage.

Call `yarn test-watch` to run your tests on any changes.

### Debug test with devtools

- Run `debug-tests`

You may pass any Jest arguments

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

One of the bif differences of these two version is that `esNext` improves the [Webpack's shake tree](https://webpack.js.org/guides/tree-shaking/).

# Others

## Link your modules easily

In case that the `yarn link` doesn't work correctly this boilerplate offers a ready sync unidirectional mechanism.

0. Copy `./syncExternalsList.sample.js` to `./syncExternalsList.js` once only. 
1. Update the `./syncExternalsList.js` list with external apps you want to keep them sync.
2. Call `yarn sync-externals`

If you use the Ubuntu shell of Win10, in the `./syncExternalsList.js` you can add a windows path prefixing it with the `*tus*`, _which stands for `to ubuntu shell`_.

Example, check the 2nd line of `./syncExternalsList.sample.js`.

**Note:** the `./syncExternalsList.js` is git ignored! 

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
