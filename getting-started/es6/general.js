/**
 * ES6 is published at 2015 as updates for Javascript
 * to extend its functionalities
 */

// let & const
let a = 10;
const z = 10;

// arrow function
let arrowFunction = () => {
  return "this is an arrow function"
}
console.log('arrowFunction():', arrowFunction())

// Class
// Promise
// Symbol

// Defaul parameter values
function getName(firstName = "foo") {
  return firstName
}
console.log(getName()); // foo

// Function Rest Parameter
function sum(...parameters) {
  let sum = 0;
  for (let parameter of parameters) sum += parameter;
  return sum;
}
let x = sum(4, 8, 16);
console.log(x); // 28

// .find() & .findIndex() methods
const numbers = [4, 9, 16, 25, 29];
function myFunction(value) {
  return value > 18;
}
// .find() method
const findResult = numbers.find(myFunction);
console.log(findResult); // 25

// .findIndex() method
const findIndexResult = numbers.find(myFunction);
console.log(findIndexResult); //3

// minimum & maximum number
var minInteger = Number.MIN_SAFE_INTEGER;
var maxInteger = Number.MAX_SAFE_INTEGER;

// Number global object
Number.isInteger(10);   // true
Number.isInteger(10.5); // false

// IsNaN
const string = "mark"
const convertToNumber = Number(string)
console.log(convertToNumber); // NaN, this is also falsy
if (isNaN(convertToNumber)) {
  console.log('Converted string is not a number');
}

// IsFinite
isFinite(10 / 0); // false
isFinite(10 / 1); // true