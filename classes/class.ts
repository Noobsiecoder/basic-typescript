class Greeting {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

let greeter = new Greeting("World!");
console.log(greeter.greet()); // Hello, World!

// Inheritance
class Animal {
  move(distanceInMeters: number = 0): void {
    console.log(`Animal moved ${distanceInMeters}m`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof, Woof!");
  }
}

const dog = new Dog();
dog.bark(); // Woof, Woof!
dog.move(); // Animal moved 0m
dog.move(10); // Animal moved 10m

// Public, private and protected members in class

class Car {
  private modelName: string;
  public constructor(name: string) {
    this.modelName = name;
  }

  public move(distanceInMeters: number): string {
    return `${this.modelName} moved ${distanceInMeters}m`;
  }
}
let carObj = new Car("Supra");
console.log(carObj.move(200)); // Supra moved 200m
