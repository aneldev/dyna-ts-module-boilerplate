// Export always from here for the types
export {
  Person, IPerson,
} from "./person/Person";

console.error(`
my-module: Import error
    You should import "my-module/dist/commonJs/web" or "my-module/dist/commonJs/node" (with lazy load or not) according the runtime environment.
    There is also am es version instead of commonJs, there imports are "my-module/dist/esNext/web" and "my-module/dist/esNext/node".
    For typescript, you are free to import the types from "my-module" but functional code from "web" or "node" versions.
`);
