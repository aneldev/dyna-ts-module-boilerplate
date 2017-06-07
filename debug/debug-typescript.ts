declare let global: any;

import {Person} from "../src/index";

let person3 = new Person('John', 32);
let person4 = new Person('Nancy', 30);

console.log('debug-typescript', {person3, person4});

import {DynaCache, IDynaCacheOptions} from 'dyna-cache';
import * as ddd from 'dyna-cache';
console.log('loaded ddd', ddd);

let myCache = new DynaCache();

myCache.add('ert', {age: 32});

console.log('MyCache age ', myCache.get('ert').age);
