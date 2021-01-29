// Function to display a value from an object
const printLabel = (labelObj: { value: string }): string => labelObj.value;

const myObj = {
  size: 10,
  value: "Ten",
};
console.log(printLabel(myObj)); // Ten

// We can do the same using Interfaces
interface LabeledValue {
  label: string;
}

const viewLabel = (labelObj: LabeledValue): string => labelObj.label;

const newObj: LabeledValue = {
  label: "This is a Label",
};

console.log(viewLabel(newObj)); // This is a label

// Optional Properties
interface SquareConfig {
  color?: string;
  width?: number; // Optional Parameter
}

const createSquareConfig = (labelObj: SquareConfig): any => {
  if (labelObj.color) return labelObj.color;
  if (labelObj.width) return labelObj.width;
};

const squareObj: SquareConfig = createSquareConfig({ color: "#ff0" });

console.log(squareObj); // #ff0

// Read-only property in Inerfaces
interface Point {
  readonly x: number;
  readonly y: number;
}

// Since it is a read-only property, we cannot change he value of 'x' and 'y'
let p1: Point = { x: 10, y: 10 };

// Read-only Array
let randomNum: number[] = [2, 4, 6, 8];
let evenNumber: ReadonlyArray<number> = randomNum;

// Indexable Types
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;

myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr); // Bob
