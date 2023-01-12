# About

Webpack setup for ES5/ES6 for Typescript Module.

Debug and dev Typescript modules in

- Debugger of any browser
- Chrome Dev Tools (for nodeJs apps)
- 
Write tests in jests.

This boilerplate consists of minimum configuration and dependencies to create one or multiple Modules are written in Typescript.

It can export one module or multiple independents.

**Have fun!**

# Features

- Write in Typescript, .tsx, .ts.
- Test and Debug on Browser, NodeJs env, or Jest test suite
- Distribute as a module with TypeScript Definitions (ready to import)
- Distribute one or multiple modules
- Export separated versions for web and node using multiple modules
- Export in commonJs and esNext module together
- Detect circular dependencies (where leads to import `undefined` or `null` values)

# Install

```
git clone https://github.com/aneldev/dyna-ts-module-boilerplate.git my-ts-module
cd my-ts-module
yarn bootstrap
```
# Zero-Configuration

No need to configure anything!

But if there is a need, you have to edit only these points:

## Webpack Loaders/Rules

Add them in `/webpack.loaders.js`.

## Webpack Plugins

Add them in `/webpack.plugins.js`.

# Distributions

This boilerplate can export one module or multiple independents.

## Single module

If the boilerplate finds the `src/index.ts` file, then this module is considered *Single*.

**For example:**

Content of `src/index.ts`:
```
export class Invoice {...}
```
Then from another package, you can import this module like this:
```
import {Invoice} from "my-ts-module";
```

## Multi modules

If the boilerplate cannot find the `src/index.ts` file, this module is considered *Multi*. In this case, the `/src` folder should contain folders that each one is a module.

**For example:**

Imagine this folder structure:
```
src/Invoice/index.ts	// content: export class Invoice {...}
src/Person/index.ts	    // content: export class Person {...}
```
Then from another package, you can import this module like this:
```
import {Invoice} from "my-ts-module/dist/Invoice";
import {Person} from "my-ts-module/dist/Person";
```
Similarly, you can dist module for a specific environment, Web or Node, and the only thing you have to take care of is to import dependencies compatible with the target environment.

The dist folder is only javascript code (ES5), without webpack module loaders so that the code can work everywhere as ES5.

## Switching from Single to Multi

1. The `/src` should contain only folders
1. Each folder is considered an independent module
1. Each one should have an `/index.ts` that exports what needed
1. Delete the `src/index.ts`

## Switching from Multi to Single

1. Create the `src/index.ts`
1. Export from is what is needed
1. The folder structure would be anything

# Develop

## General

The source code of your module is under the `src/` folder.

Under the `tests` folder, you create the tests for your module.

## Debug

### Debug Jest Tests

1. Write your jest tests under `/test` folder or everywhere else
2. Call `yarn test-debug <name of the test file>`

### Debug on any web browser with Browser's debugger

1. In `/debug/in-browser.ts` write a small code to debug your module
2. Call `yarn debug-in-browser` to start the builder and open a dev server (via webpack).
3. Open http://localhost:3300/ address in any browser.

> After you finish, `yarn build` is required to clean up the `dist` folder.

Use any web browser to test it.

### Debug on nodeJs with devTools

1. Import in `/debug/in-node.ts` write a small code to debug your module
2. Call `yarn debug-watch` to start the builder. This builder watches your changes made in debug/ & src/ folders.
3. Call `yarn debug-in-devtools` to start and debug with the devTools debugger of your Chrome browser.

Alternatively, you can call `yarn debug-in-devtools` (with -brk at the end) to place a breakpoint on the app's startup to catch early points.

Open [chrome://inspect/#devices](chrome://inspect/#devices) to list the debuggable instances in your localhost. You should see your app there to debug it.

> After you finish, `yarn build` is required to clean up the `dist` folder.

### Run code & restart on changes

1. Import in `/debug/in-node-ts` write a small code to debug your module
2. Call `yarn debug-watch` to start the builder. This builder watches your changes made in debug/ & src/ folders.
3. Call `yarn debug-run` and will run your debug application on node.js.

The built code, ready to run is under the `debug/build/debug-dev-on-nodejs` path.

> After you finish, `yarn build` is required to clean up the `dist` folder.

# Analyse

1. Call `yarn analyse`

# Test

## Write tests

For tests, the [Jest](https://facebook.github.io/jest) used, check the documentation.

Test files can be everywhere, but they should have the name `*.(test|spec).(ts|js)`. There is `tests/` folder if you want to use it but this is not a limitation.

## Run tests

Call `yarn test` to run your tests and coverage.

Call `yarn test-watch` to run your tests on any changes.

### Debug test with devtools

- Run `debug-jest`

You may pass any Jest arguments like the test name to debug specific test.

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

`yarn build` uses the TSC compiler only (not Webpack).

# Features

## Link with `sync-usages`

### About

Link your modules easily with the `yarn sync-usages --watch` watcher script.

In case that the `yarn link` doesn't work for any reason, this boilerplate offers a "copy" approach to update the packages.

The script performs:

- Scans deeply for usages of this package in all siblings folders
- Updates all usages with the content of this package, excluding the `node_modules` of this package
- Before the copy clears the target `src` && `dist` folders

### Run

- Call `yarn sync-usages` to sync it once
- Call `yarn sync-usages --watch` for run in watcher mode

### `sync-usages` prerequisite

- For Mac, you don't need to do anything. It is already there.
- For Linux [follow this guide](https://www.hostinger.com/tutorials/how-to-use-rsync)
- For Windows's _not a clear guid has been found, feel free to fork this doc._

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
