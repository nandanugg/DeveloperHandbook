/**
 * Run this file by using "node stringPower"
 * 
 * A string is a value that consists of letter or words
 * It uses a double quote (""), single quote ('') or backtick (``)
 * markup to declare a value to be a string
 */

// How to write it
let name = "Nanda"

// If we want to include a single quote in our string, we need a double quote markup for our string
console.log("String with single quote:", "Ma'ruf")

// It works in reverse, if we need a double quote in our string, we need a single quote markup
console.log("String with double quote:", 'Teacher says "Learn!"')

// If we want to include a single quote or double quote in a string, we can use a backtick markup
console.log("String with single & double quote:", `This string includes a single quote (') and a double quote (")`);

// By using a backtick, we can store a string with new lines
console.log('String with new line:', `This is
string
with
new lines`);

// String can add another string 
var firstName = "Mark"
var lastName = "Sudrajat"
console.log('String plus string:', firstName + " " + lastName) // Mark Sudrajat

// We can simplify above code by using backtick template literal
console.log(`${firstName} ${lastName}`)