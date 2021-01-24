/**
 * Run this file by using "node functions"
 *
 * Function is a collection of codes, it commonly
 * used to encapsulate and reuse codes so we can
 * save lines of code
 */


// How to create a function
//       👇 function name 👇 parameter
function addDollarSign(number) {
  const output = `$${number}` // 👈 process
  return output // 👈 return / result of the function
}
// How to use a function
// if we don't need the return
addDollarSign(200)
// if we need the return to be assigned with a value
let itemValue = addDollarSign(200)
console.log('from addDollarSign()', itemValue) // $200

function getHello() {
  return 'hello'
}
// we need the return to be logged into terminal
console.log('from getHello():', getHello()); // hello

function sayHello() {
  console.log('from sayHello():', "hello");
}

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

