/**
 * Run this file by using "node arrowFunctions"
 *
 * Arrow function (Anonymous function) is a function that does't
 * have a name, it usually used for callbacks
 * 
 * Arrow function is actually a value, so we can fill
 * it into a variable, though, there's only a bit
 * of practical usability of it
 */

// Anonymous function structure
let variableFunction = function () {
  return "this is an anonymous function"
}
console.log('from variableFunction():', variableFunction())

// Arrow function structure
let variableArrowFunction = () => {
  return "this is an arrow function"
}
console.log('from variableArrowFunction():', variableArrowFunction())

// TODO: add reference vs calling a function

/**
 * Callback is a way to return a value inside a function
 * 
 * It usualy used for function that needs time to return
 * a value, such as internet requests
 * 
 * To understand it, we need to know about Javascript built
 * in function called setTimeout()
 */

// setTimeout() delays the execution of the arrow function 
// by how much milliseconds that we put in second parameter
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
console.log('from getMessage():', getMessage()); // undefined

/**
 * However, we can trick synchronous function by using
 * the callback pattern to wait the setTimeout() delay
 */
function getMessageWithCallback(callback) {
  setTimeout(() => {
    callback('this is a string from getMessageWithCallback()')
    /**
     * 👆 in callback pattern, the callback parameter should be
     * inserted with an arrow / anonymous function
     * 
     * Because callback is a an arrow / anonymous function
     * we can use the callback parameter like a function, and then
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
  console.log('from getMessageWithCallback():', result); // successfull!
})

/**
 * A callback pattern is used in most of Javascript method
 * one of which is array map() method
 */

// .map() method is used to modify each item in an array
var joinedNames = ["Budi", "Siti", "Halim"]
var botNames = joinedNames.map((name) => {
  return `${name}-bot`
})
console.log("from joinedNames.map()", botNames)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

