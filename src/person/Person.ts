
export interface IPerson {
  name: string;
  age: number;
}

export class Person {

  constructor(private readonly name: string, private readonly age: number) {
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
