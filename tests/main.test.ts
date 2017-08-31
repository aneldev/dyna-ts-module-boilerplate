declare let jasmine: any, describe:any, expect:any, it: any;

const ITEM_TIMEOUT_MS: number = 150;

const STRESS_TEST: boolean = false;
const STRESS_ITEMS_COUNT: number = 2000;
const ITEMS_COUNT: number = STRESS_TEST && STRESS_ITEMS_COUNT || 1;

if (typeof jasmine !== 'undefined')
  jasmine.DEFAULT_TIMEOUT_INTERVAL = (STRESS_TEST && STRESS_ITEMS_COUNT || 1) * ITEM_TIMEOUT_MS;

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
