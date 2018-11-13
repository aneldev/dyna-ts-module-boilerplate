(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-ts-module-boilerplate", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-ts-module-boilerplate"] = factory();
	else
		root["dyna-ts-module-boilerplate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, repository, sideEffects, main, typings, scripts, keywords, author, license, dependencies, devDependencies, jest, jest-junit, default */
/*! all exports used */
/***/ (function(module) {

module.exports = {"name":"dyna-ts-module-boilerplate","version":"4.4.11","description":"Boilerplate for node apps/modules","repository":{"type":"git","url":"http://github.com/aneldev/dyna-ts-module-boilerplate"},"sideEffects":false,"main":"./dist/index.js","typings":"./dist/index.d.ts","scripts":{"create":"npm run .creation-prepare",".creation-prepare":"rm -rf .git; rm -rf package-lock.json; mv README.md README.boilerplate.md; echo \\# readme > README.md && npm run .creation-install",".creation-install":"npm install && npm run .creation-done",".creation-done":"node boilerplate.js && echo --- module created, set the name, version and repo address in package.json","clear":"rimraf build temp","lint":"tslint './src/**/*.ts*' --format stylish --force","debug-dev-build":"rimraf build && webpack --config webpack.debug-dev.nodejs.config.js --watch","debug-dev-browser":"webpack-dev-server --config webpack.debug-dev.browser.config.js --devtool eval --progress --hot --open --content-base debug-ground/debug-dev-on-browser --host 127.0.0.1 --port 3300","debug-dev-browser-at":"webpack-dev-server --config webpack.debug-dev.browser.config.js --devtool eval --progress --hot --open --content-base debug-ground/debug-dev-on-browser --host 127.0.0.1 --port","debug-dev-devtools":"node --inspect --expose-gc ./debug-ground/debug-dev-on-nodejs/index.js  && npm run debug-dev-devtools","debug-dev-devtools-brk":"node --inspect-brk --expose-gc ./debug-ground/debug-dev-on-nodejs/index.js  && npm run debug-dev-devtools-brk","debug-dev-inspector":"node-debug --expose-gc ./debug-ground/debug-dev-on-nodejs/index.js  && npm run debug-dev-inspector","debug-dev-inspector-brk":"node-debug --debug-brk --expose-gc ./debug-ground/debug-dev-on-nodejs/index.js  && npm run debug-dev-inspector-brk","debug-dev-run":"node --expose-gc debug-ground/debug-dev-on-nodejs/index.js","debug-tests-build":"rimraf build && webpack --config webpack.debug-test.nodejs.config.js --watch","debug-tests-browser":"webpack-dev-server --config webpack.debug-test.browser.config.js --devtool eval --progress --hot --open --content-base debug-ground/debug-test-on-browser --host 127.0.0.1 --port 3300","debug-tests-browser-at":"webpack-dev-server --config webpack.debug-test.browser.config.js --devtool eval --progress --hot --open --content-base debug-ground/debug-test-on-browser --host 127.0.0.1 --port","debug-tests-devtools":"node --inspect --expose-gc --trace-warnings ./debug-ground/debug-test-on-nodejs/index.js  && npm run debug-tests-devtools","debug-tests-devtools-brk":"node --inspect-brk --expose-gc --trace-warnings ./debug-ground/debug-test-on-nodejs/index.js  && npm run debug-tests-devtools-brk","debug-tests-inspector":"node-debug --expose-gc --trace-warnings ./debug-ground/debug-test-on-nodejs/index.js  && npm run debug-tests-inspector","debug-tests-inspector-brk":"node-debug --debug-brk --expose-gc --trace-warnings ./debug-ground/debug-test-on-nodejs/index.js  && npm run debug-tests-inspector-brk","debug-tests-run":"node --expose-gc debug-ground/debug-test-on-nodejs/index.js","sync-externals":"node syncExternals.js","build-analyze":"set NODE_ENV=development && webpack --config webpack.dist.analyze.config.js","build-watch":"set NODE_ENV=development && webpack --config webpack.dist.config.js --watch","build-tsc-watch":"tsc -w","build":"rimraf ./dist/ && npm run .build-index.d.ts && npm run .build-dist",".build-index.d.ts":"tsc && npm run .build-index.d.ts-clear",".build-index.d.ts-clear":"cd dist/ && find . -name \\*.js -delete && cd .. && rimraf temp",".build-dist":"set NODE_ENV=development && webpack --config webpack.dist.config.js","release":"npm run build && npm run publish-push","test":"jest --coverage --no-cache --runInBand","test-only":"jest --coverage --verbose --no-cache --runInBand","test-watch":"jest --watch --verbose --runInBand","commit":"git add -u && git add -A && git commit -m","commit-amend":"git add -u && git add -A && git commit --amend --no-edit","pp":"npm run publish-push","publish-push":"git add -u && git add -A && git commit -m \"last minute changes\"; npm version patch && npm publish && git push && git push --tags","tpp":"npm run test-publish-push","test-publish-push":"npm test && npm version patch && npm publish && git push && git push --tags","clear-npm-cache":"npm cache clear --force","update-release":"npm update && git add -u && git add -A && git commit -m \"last minute update-release changes\"; npm run release","reinstall":"rm ./package-lock.json; rm -rf ./node_modules; npm install","reinstall-dyna":"rm ./package-lock.json; rm -rf ./node_modules/dyna-*; npm install"},"keywords":[],"author":"Anel dev","license":"MIT","dependencies":{},"devDependencies":{"@babel/cli":"^7.1.2","@babel/core":"^7.1.2","@babel/preset-env":"^7.1.0","@types/enzyme":"^3.1.15","@types/jest":"^23.3.9","@types/node":"^10.12.2","autoprefixer":"^7.2.6","awesome-typescript-loader":"^5.2.1","babel-jest":"20.0.3","babel-loader":"^8.0.4","chokidar":"^1.7.0","circular-dependency-plugin":"^4.0.0","dyna-node-console":"^1.0.7","enzyme":"^3.7.0","enzyme-to-json":"^3.3.4","file-loader":"^2.0.0","font-awesome":"^4.7.0","html-webpack-plugin":"^3.2.0","identity-obj-proxy":"^3.0.0","image-webpack-loader":"^4.5.0","jest":"^23.6.0","jest-cli":"^23.6.0","jest-junit":"^1.5.1","jsdom":"11.5.1","jsdom-global":"3.0.2","nodemon":"^1.18.6","rimraf":"^2.6.2","source-map-loader":"0.1.5","ts-jest":"^20.0.14","tslint":"^5.11.0","typescript":"^2.9.2","webpack":"^4.25.1","webpack-bundle-analyzer":"^2.13.1","webpack-cli":"^3.1.2","webpack-dev-middleware":"^3.4.0","webpack-dev-server":"^3.1.10","webpack-merge":"^4.1.4","webpack-node-externals":"^1.7.2"},"jest":{"setupTestFrameworkScriptFile":"./tests/setup/testSetup.ts","automock":false,"collectCoverage":false,"testEnvironment":"jest-environment-node","transform":{".(ts|tsx)":"<rootDir>/node_modules/ts-jest/preprocessor.js"},"testRegex":"(src|tests)/.*\\.(test|spec)\\.(ts|tsx|js|jsx)$","moduleFileExtensions":["ts","tsx","js","jsx"],"moduleNameMapper":{"\\.(css|less|scss|jpg|png|svg|gif)$":"identity-obj-proxy"},"coverageDirectory":"coverage","collectCoverageFrom":["src/**/*.{ts,tsx,js,jsx}","!src/**/*.d.ts"],"snapshotSerializers":["enzyme-to-json/serializer"]},"jest-junit":{"output":"./coverage/junit.xml"}};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
}); // Export always from here for the types

__export(__webpack_require__(/*! ./person/Person */ "./src/person/Person.ts")); // In case you want to dictate the users to use one of the two versions


var moduleName = __webpack_require__(/*! ../package.json */ "./package.json").name;

console.error("\n" + moduleName + ": Import error\nYou should import with lazy load (webpack's import()) the \"" + moduleName + "/web\" or the \"" + moduleName + "/node\" version according the runtime environment.\nFor typescript, you should import also on top the \"" + moduleName + "\" but on runtime you shouldn't see this error since this import is not part of the compiled code.\n");

/***/ }),

/***/ "./src/person/Person.ts":
/*!******************************!*\
  !*** ./src/person/Person.ts ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Person =
/** @class */
function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.getName = function () {
    return this.name;
  };

  Person.prototype.getAge = function () {
    return this.age;
  };

  Person.prototype.get = function () {
    return {
      name: this.name,
      age: this.age
    };
  };

  Person.prototype.console = function () {
    console.log("Person " + this.name + " " + this.age);
  };

  return Person;
}();

exports.Person = Person;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map