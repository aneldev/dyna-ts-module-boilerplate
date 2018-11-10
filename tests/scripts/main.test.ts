declare let jasmine: any, describe: any, expect: any, it: any;
import {Person} from "../../src"
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('Internal module test', () => {
  it('Person', () => {
    const n = new Person("John", 32);
    expect(n.getName()).toBe("John");
    expect(n.getAge()).toBe(32);
	});
});
