export interface IPerson {
  name: string;
  age: number;
}

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
