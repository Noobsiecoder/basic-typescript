// Named functions
function add(x: number, y: number): number {
  return x + y;
}

// Anonymous functions
const multiply = (x: number, y: number): number => x * y;

// Optional parameters
const buildName = (firstName: string, lastName?: string): string =>
  // Checking if lastName isn't empty
  lastName ? `${firstName} ${lastName}` : firstName;

let result1: string = buildName("John", "Doe");
let result2: string = buildName("Jane");

console.log(result1, result2); // John Doe Jane

// Default parameters
const square = (x: number = 1): number => x ** 2;

let numSquare: number = square();
console.log(numSquare); // 1

numSquare = square(4);
console.log(numSquare); // 16

// Rest parameters
const constructName = (firstName: string, ...restName: string[]): string =>
  `${firstName} ${restName.join(" ")}`;

let employeeName: string = constructName(
  "Joseph",
  "Samuel",
  "Lucas",
  "MacKinzie"
);

console.log(employeeName);
