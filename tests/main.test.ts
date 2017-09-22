declare let jasmine: any, describe:any, expect:any, it: any;

const STRESS_TEST: boolean = true;
const ITEM_TIMEOUT_MS: number = 10;
const NORMAL_ITEMS_COUNT: number = 20;
const STRESS_ITEMS_COUNT: number = 200;

const ITEMS_COUNT: number = STRESS_TEST && STRESS_ITEMS_COUNT || NORMAL_ITEMS_COUNT;
const timeout = (STRESS_TEST && STRESS_ITEMS_COUNT || 1) * ITEM_TIMEOUT_MS;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;

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
