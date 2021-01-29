// boolean
var isCompleted = false;
// number
var decimal = 12;
var hex = 0xf00d;
var binary = 11;
var octal = 138;
// string
var color = "blue";
color = "red";
var sentence = "I like " + color + " color.";
// Arrays
var list = [1, 2, 3];
var newList = [1, 2, 3];
// Tuple
var x;
x = ["Hello", 25];
console.log(x[0]); // Hello
// Enum
var Colors;
(function (Colors) {
  Colors[(Colors["Red"] = 0)] = "Red";
  Colors[(Colors["Green"] = 1)] = "Green";
  Colors[(Colors["Blue"] = 2)] = "Blue";
})(Colors || (Colors = {}));
var c = Colors.Red;
console.log(c); // 0
var Language;
(function (Language) {
  Language[(Language["Python"] = 1)] = "Python";
  Language[(Language["JavaScript"] = 2)] = "JavaScript";
  Language[(Language["TypeScript"] = 3)] = "TypeScript";
  Language[(Language["C++"] = 4)] = "C++";
})(Language || (Language = {}));
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
var dataTypeNotSure = 12;
dataTypeNotSure = "Maybe a string?";
// Any
var looselyTyped = 12;
// Void
function warnUser() {
  console.log("This is a warning message!");
}
// Null
var a = undefined;
var b = null;
// Never
/* Function returning never must not have a reachable end point */
var error = function (message) {
  throw new Error(message);
};
/* Inferred return type is never */
var fail = function () {
  return error("Something Failed");
};
/* Function returning never must not have a reachable end point */
var infiniteLoop = function () {
  while (true) {}
};
// Type Assertion
/* as-syntax */
var value = "String?";
var strLength = value.length;
/* angle-bracket syntax */
value = "New String?";
strLength = value.length;
/*
 * Note:-
 *      Only use primitive data-types from JavaScript to avoid confusion
 */
