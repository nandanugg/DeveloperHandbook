/**
 * Run this file by using "node functions"
 *
 * Function is a collection of codes, it commonly
 * used to encapsulate and reuse codes so we can
 * save lines of code
 */


// How to create a function
function addDollarSign(number) { // "addDollarSign" = function name; "number" = parameter, it's like a variable but only for the function
  const output = `$${number}` // we can use parameter only inside the function itself
  return output // "return" = statement that makes this function have an output / result / return
}

// How to use a function
let itemValue = addDollarSign(200) // "200" = value that we want to be putted inside the function to be processed
// "itemValue" = a variable that will be used to place the function result
console.log('from addDollarSign()', itemValue) // $200

// if we try to use a function written with a parameter without inserting a value in the parameter when using it
let functionWithoutParameter = addDollarSign()
console.log("functionWithoutParameter:", functionWithoutParameter); // "$undefined"
/**
 * the function will wrongly behave! The parameter inside the function 
 * will be filled with undefined! Then will be converted to string
 * 
 * string is very strong, it will take value with any type to be a string!
 * boolean + string = string
 * number + string = string
 * null + string = string
 * undefined + string = string
 */

// a function also can to not have a parameter
function getHello() {
  return 'hello'
}
// we can put the function return value directly to another function
console.log('from getHello():', getHello()); // hello

// A function also able to not have a return value
function sayHello() {
  console.log('from sayHello():', "hello");
}

/**
 * If a function doesn't have a return statement / value
 * or we just don't need the return value, we
 * can just type like this
 */
sayHello()

/**
 * If a function doesn't have a return statement / value
 * and we still want to try get the return, it will
 * be retuned with "undefined"
 */
let functionValue = sayHello()
console.log("functionValue:", functionValue); // undefined