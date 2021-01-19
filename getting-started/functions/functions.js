/**
 * Run this file by using "node functions"
 *
 * Function is a collection of codes, it commonly
 * used to encapsulate and reuse codes so we can
 * save lines of code
 */

// Function structures
function functionName(parameter) {
  let process = 'this is the result'
  return process
}
// if we write a function without call / use / execute it, we will
// never be able to run the code inside the function

//       👇 function name 👇 parameter
function addDollarSign(number) {
  const output = `$${number}` // 👈 process
  return output // 👈 return / result of the function
}
// 👇 the function result will be inserted here
let itemValue = addDollarSign(200) // 👈 how to execute a function
console.log('from addDollarSign()', itemValue) // $200

function getHello() {
  return 'hello'
}
// we can put a function directy into log
console.log('from getHello():', getHello()); // hello

function sayHello() {
  console.log('from sayHello():', "hello");
}
// we can just use a function if we don't need it's return value or does't have one
sayHello()

// Function concepts

/**
 * Impure function
 * 
 * Is a function that uses any functions or variables outside
 * of its function
 */
let startingMessage = 'The message is :'

function showMessage(message) {
  const output = `${startingMessage} ${message}`
  console.log('from showMessage():', output)
}
showMessage("Halo semua!")

/**
 * Pure function
 *
 * Is a function that only uses functions or variables inside
 * of its function
 */
function addExclamationMark(word) {
  const output = `${word}!`
  return output
}

var addedExclamationWord = addExclamationMark("Budi")
console.log('from addExclamationMark():', addedExclamationWord)

