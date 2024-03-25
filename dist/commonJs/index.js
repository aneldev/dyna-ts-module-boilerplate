"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHelloWorld = void 0;
require("./utils/unhandledPromiseRejectionsInNode");
var jsonData = require("./test.json");
var sayHelloWorld = function () { return console.log('sayHelloWorld(): Hello world', { jsonData: jsonData }); };
exports.sayHelloWorld = sayHelloWorld;
//# sourceMappingURL=index.js.map