// boolean
let isCompleted: boolean = false;

// number
let decimal: number = 12;
let hex: number = 0xf00d;
let binary: number = 0b1011;
let octal: number = 0o212;

// string
let color: string = "blue";
color = "red";
let sentence: string = `I like ${color} color.`;

// Arrays
let list: number[] = [1, 2, 3];
let newList: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["Hello", 25];
console.log(x[0]); // Hello

// Enum
enum Colors {
  Red,
  Green,
  Blue,
}
let c: Colors = Colors.Red;
console.log(c); // 0

enum Language {
  Python = 1,
  JavaScript,
  TypeScript,
  "C++",
}
console.log(Language);

/*
 * Output :-
 * {
 *      '1': 'Python',
 *      '2': 'JavaScript',
 *      '3': 'TypeScript',
 *      '4': 'C++',
 *      Python: 1,
 *      JavaScript: 2,
 *      TypeScript: 3,
 *      'C++': 4
 * }
 */

// Unknown
let dataTypeNotSure: unknown = 12;
dataTypeNotSure = "Maybe a string?";

// Any
let looselyTyped: any = 12;

// Void
function warnUser(): void {
  console.log("This is a warning message!");
}

// Null
let a: undefined = undefined;
let b: null = null;

// Never
/* Function returning never must not have a reachable end point */
const error = (message: string): never => {
  throw new Error(message);
};

/* Inferred return type is never */
const fail = () => error("Something Failed");

/* Function returning never must not have a reachable end point */
const infiniteLoop = (): never => {
  while (true) {}
};

// Type Assertion
/* as-syntax */
let value: unknown = "String?";
let strLength: number = (value as string).length;
/* angle-bracket syntax */
value = "New String?";
strLength = (<string>value).length;

/*
 * Note:-
 *      Only use primitive data-types from JavaScript to avoid confusion
 */
