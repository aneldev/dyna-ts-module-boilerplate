import "./utils/unhandledPromiseRejectionsInNode";

import * as jsonData from "./test.json";

export const sayHelloWorld = () => console.log('sayHelloWorld(): Hello world', {jsonData});
