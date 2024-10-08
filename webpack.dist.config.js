﻿const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isSingleModule = fs.existsSync('./src/index.ts');
const thisPackageBelongsToMonorepo =
  fs.existsSync('../../package.json') &&
  !!require('../../package.json').workspaces;

const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const getModuleNames =
  root =>
    fs.readdirSync(root, {withFileTypes: true})
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

const moduleNames = getModuleNames('./src');

process.traceDeprecation = true;

const config = {
  mode: "development",          // distribute it without minification
  target: "node",
  entry:
    isSingleModule
      ? (
        // Classic export of the /src/index.ts
        [
          path.resolve(__dirname, 'src/index.ts')
        ]
      )
      : (
        // Multiple module exports of the /src/<Module name>/index.ts
        moduleNames
          .reduce((acc, entry) => {
            acc[entry] = `./src/${entry}`;
            return acc;
          }, {})
      ),
  externals:
    thisPackageBelongsToMonorepo
      ? [                  // exclude all dependencies from the bundle
        nodeExternals(),
        nodeExternals({
          modulesDir: path.resolve(__dirname, '../../node_modules')
        })
      ]
      : nodeExternals(),
  optimization: {
    // help: https://webpack.js.org/guides/tree-shaking/
    usedExports: true,  // true to remove the dead code,
  },
  devtool: "source-map",        // help: https://webpack.js.org/configuration/devtool/
  // Every folder of ./src is a standalone exported module
  output:
    isSingleModule
      ? {
        // Classic export of the /src/index.ts
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        library: package_.name,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        clean: true,
      }
      : {
        // Multiple module exports of the /src/<Module name>/index.ts
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name]/index.js',
        library: package_.name,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        clean: true,
      },
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: loaders.module.rules,
  },
  plugins: plugins.plugins,
};

module.exports = config;
