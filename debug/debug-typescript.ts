declare let global: any;

import {Person} from "../src/index";

let person3 = new Person('John', 32);
let person4 = new Person('Nancy', 30);

console.log('debug-typescript', {person3, person4});
