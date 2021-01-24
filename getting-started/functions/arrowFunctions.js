/**
 * Run this file by using "node arrowFunctions"
 *
 * Arrow / Anonymous function is a function that does't
 * have a name, it usually used for callbacks
 * 
 * Arrow function is actually a value, so we can fill
 * it into a variable
 */

// Anonymous function structure
let anonymousFunction = function () {
  return "this is an anonymous function"
}
console.log('variableFunction():', anonymousFunction())

// Arrow function structure
let arrowFunction = () => {
  return "this is an arrow function"
}
console.log('variableArrowFunction():', arrowFunction())

// Arrow function can also have multipe parameter
let mutipleParameters = (firstWord, secondWord) => {
  return `${firstWord} ${secondWord}`
}
console.log("mutipleParameters()", mutipleParameters("My", "toy")); // My toy

// If an arrow function have one parameter, we can simplify it without using braces "()"
let convertToHashtag = word => {
  return `#${word}`
}
console.log("convertToHashtag():", convertToHashtag('beach')); // "#beach"

// If an arrow function have one statement inside it, we can simplify it without using curly braces "{}"
let convertToDollar = amount => `$${amount}`
console.log("convertToDollar():", convertToDollar(500)); // "$500"

/**
 * Callback is a way to return a value inside a function
 * 
 * It usualy used for function that needs time to return
 * a value, such as internet requests
 * 
 * To understand it, we need to know about Javascript built
 * in function called setTimeout()
 */

/**
 * setTimeout() delays the execution of the arrow function
 * by how much milliseconds that we put in second parameter
 */
setTimeout(() => {
  console.log('this log will be executed after 3000ms (3 seconds)'); // 👈 this line will be executed after 3 secs
}, 3000);

/**
 * Below function will not return anything because our code
 * is synchronous, means it reads the next line without
 * waiting anything, and as we know, sendTimeout() delay
 * the return statement, and synchronous does not wait
 */
function getMessage() {
  setTimeout(() => {
    return 'this is a string from getMessage()'
  }, 3000);
  console.log("getMessage() has finished reading all of it's codes!");
}
console.log('getMessage():', getMessage()); // undefined

/**
 * However, we can trick synchronous function by using
 * the callback pattern to wait the setTimeout() delay
 */
function getMessageWithCallback(cb) {
  setTimeout(() => {
    cb('this is a string from getMessageWithCallback()')
    /**
     * 👆 in callback pattern, the callback parameter should be
     * inserted with anfunction
     * 
     * Because cb is a function
     * we can use the cb parameter like a function, and then
     * call it with parameter of this function result
     */
  }, 3000);
  console.log("getMessageWithCallback() has finished reading all of it's codes!");
}

/**
 * Because we already use the getMessageWithCallback() parameter
 * like a function, so we need to fill the first parameter with a function
 * in order to make getMessageWithCallback() work properly
 */
getMessageWithCallback((result) => {
  // the result parameter will be filled with the getMessageWithCallback() string
  console.log('getMessageWithCallback():', result); // successfull!
})

/**
 * A callback pattern is used in most of Javascript method
 * one of which is array forEach() method
 */

// .forEach() method is used to loop arrays
var joinedNames = ["Budi", "Siti", "Halim"]
var botNames = joinedNames.forEach((name) => {
  console.log('.forEach():', name);
})

