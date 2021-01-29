/* Program to reverse a number or a string */
const reverseNum = (value: number): number =>
  parseInt(value.toString().split("").reverse().join(""));

const reverseString = (value: string): string =>
  value.split("").reverse().join("");

console.log(reverseString("Hello from TypeScript!")); // !tpircSepyT morf olleH

console.log(reverseNum(123)); // 321
