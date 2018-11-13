// Export always from here for the types
export * from "./person/Person";

// In case you want to dictate the users to use one of the two versions
const _package = require('../package.json');
console.error(`
${_package.name}: Import error
You should import with lazy load (webpack's import()) the "${_package.name}/web" or the "${_package.name}/node" version according the runtime environment.
For typescript, you should import also on top the "${_package.name}" but on runtime you shouldn't see this error since this import is not part of the compiled code.
`);