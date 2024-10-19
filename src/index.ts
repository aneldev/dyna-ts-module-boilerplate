import "./utils/unhandledPromiseRejectionsInNode";

import * as jsonData from "./test.json";
export * from "./utils/isNode";

export const sayHelloWorld = (): Record<string, any> => {
  console.log('sayHelloWorld(): Hello world', {jsonData});
  return jsonData;
};
