/**
 * Run this file by using "node functions"
 *
 * Function is a collection of codes, it commonly
 * used to encapsulate and reuse codes so we can
 * save lines of code
 */


// How to create a function
function addDollarSign(number) {
  const output = `$${number}`
  return output
}
// How to use a function
// if we don't need the return
addDollarSign(200) // 👈 remember to put the "()" after function name, otherwise the function wouldn't run / execute

// if we need the return to be assigned with a value
let itemValue = addDollarSign(200)
console.log('from addDollarSign()', itemValue) // $200

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