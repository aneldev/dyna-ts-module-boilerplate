declare let jasmine: any, describe:any, expect:any, it: any;
if (typeof jasmine !== 'undefined') jasmine.getEnv().defaultTimeoutInterval  = 5000;

import {Person} from '../src';

// help: https://facebook.github.io/jest/docs/expect.html

let person1 = new Person('John', 32);
let person2 = new Person('Nancy', 30);

describe('My Module Person tests', () => {
	it('should create person 1', () => {
		expect(person1).not.toBe(undefined);
	});
	it('should create person 2', () => {
		expect(person1).not.toBe(undefined);
	});
	it('should person 1 be John', () => {
		expect(person1.getName()).toBe('John');
	});
	it('should person 2 be Nancy', () => {
		expect(person2.getName()).toBe('Nancy');
	});
	it('should person 1 have correct age', () => {
		expect(person1.getAge()).toBe(32);
	});
	it('should person 2 have correct age', () => {
		expect(person2.getAge()).toBe(30);
	});
});
