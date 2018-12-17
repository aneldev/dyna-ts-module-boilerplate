(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-ts-module-boilerplate", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-ts-module-boilerplate"] = factory();
	else
		root["dyna-ts-module-boilerplate"] = factory();
})(global, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/node.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dyna/universalImport.ts":
/*!*********************************!*\
  !*** ./dyna/universalImport.ts ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.importUniversal = function (moduleName) {
  var universalImports = typeof process !== "undefined" && process.universalImports || typeof window !== "undefined" && window.universalImports;

  if (!universalImports) {
    console.error("importUniversal error: no exports found, use exportUniversalNode/exportUniversalWeb to export universal modules");
  }

  var runningEnvironment = process && process.universalImports ? "node" : "web";

  if (!universalImports[moduleName]) {
    console.error("importUniversal error: module [" + moduleName + "] not found, seems that is not exported for running Environment [" + runningEnvironment + "]");
  }

  return universalImports[moduleName];
};

exports.exportNode = function (modules) {
  process.universalImports = __assign({}, process.universalImports || {}, modules);
};

exports.exportWeb = function (modules) {
  window.universalImports = __assign({}, window.universalImports || {}, modules);
};

/***/ }),

/***/ "./src/node.ts":
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var universalImport_1 = __webpack_require__(/*! ../dyna/universalImport */ "./dyna/universalImport.ts"); // import {ExternalModule} from "super-universal-module/node";


universalImport_1.exportNode({// ExternalModule,        // Export for this module node dependencies
});

__export(__webpack_require__(/*! ./person/Person */ "./src/person/Person.ts"));

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
}); // const _ExternalModule = importUniversal<typeof ExternalModule>("ExternalModule");
// For more how to import universal deps https://github.com/aneldev/dyna-ts-module-boilerplate#universal-imports

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
//# sourceMappingURL=node.js.map