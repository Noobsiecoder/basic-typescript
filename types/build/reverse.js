/* Program to reverse a number or a string */
var reverseNum = function (value) {
  return parseInt(value.toString().split("").reverse().join(""));
};
var reverseString = function (value) {
  return value.split("").reverse().join("");
};
console.log(reverseString("Hello from TypeScript!")); // !tpircSepyT morf olleH
console.log(reverseNum(123)); // 321
