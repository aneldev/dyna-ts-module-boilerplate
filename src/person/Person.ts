import {importUniversal} from "../../dyna/universalImport";

export interface IPerson {
  name: string;
  age: number;
}

// const _ExternalModule = importUniversal<typeof ExternalModule>("ExternalModule");
// For more how to import universal deps https://github.com/aneldev/dyna-ts-module-boilerplate#universal-imports

export class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public get(): IPerson {
    return {
      name: this.name,
      age: this.age,
    };
  }

  public console(): void {
    console.log(`Person ${this.name} ${this.age}`);
  }
}
