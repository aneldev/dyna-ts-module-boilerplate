let fs = require('fs');
const create = require('./_create').create;

const moduleName = process.argv[2];
const withReact = true;
let validArgs = true;

if (!moduleName) {
  console.log('Syntax: create-module <module name>');
  console.log('Example: create-module-with-react my-awesome-ts-module');
  validArgs = false;
}

if (validArgs) {
  create(moduleName, withReact);
}
else{
  process.exit(1);
}

