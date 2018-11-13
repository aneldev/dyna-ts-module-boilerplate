// Export always from here for the types
export * from "./person/Person";

// In case you want to dictate the users to use one of the two versions
console.error(`
my-module: Import error
You should import with lazy load (webpack's import()) the "my-module/web" or the "my-module/node" version according the runtime environment.
For typescript, you should import also on top the "my-module" but on runtime you shouldn't see this error since this import is not part of the compiled code.
`);