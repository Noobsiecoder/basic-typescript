const padLeft = (value: string, padding: any): string =>
  Array(padding + 1).join(" ") + value;

let result: string = padLeft("Hello!", 2);
console.log(result); // No problem encountered

let newResult: string = padLeft("Hello Again!", true); // Leaves one space
console.log(newResult);

newResult = padLeft("Hello Again!", "a");
console.log(newResult); // Prints 'a1Hello again'
/*
 * This is because we have given padding as 'any'
 */

// To solve these problems, we can use unions
const padRight = (value: string, padding: string | number): string => {
  if (typeof padding === "number") return value + Array(padding + 1).join(" ");
  else return value + padding;
};

console.log(padRight("Union", 5));
console.log(padRight("Union", " in TypeScript"));

