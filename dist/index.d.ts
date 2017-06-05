declare module 'dyna-ts-module-boilerplate/index' {
	export interface IPerson {
	    name: string;
	    age: number;
	}
	export class Person {
	    private name;
	    private age;
	    constructor(name: string, age: number);
	    getName(): string;
	    getAge(): number;
	    get(): IPerson;
	}

}
