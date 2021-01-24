/**
 * Run this file by using "node booleanPower"
 * 
 * A boolean is a value that have logical meaning, commonly used for ifs
 */

// How to write it
let isRaining = false
let isSunny = true

// How to use it in if statement
if (isRaining) {
  console.log('IsRaining if:', "Today is raining"); // "Today is raining"
} else {
  console.log('IsRaining if:', "Today isn't raining");
}

// We can shorten the "if" statement by using "Conditional terniary operator"
let isHavePhone = true
let isListenMusic = isHavePhone ? "Let's hear music!" : "Nah, let's hear it later"
console.log("isListenMusic:", isListenMusic); // "Let's hear music!"

/**
 * Boolean can also be written in boolean comparison operator
 * means the return of this operator will be boolean
 * 
 * Below opearor (==) is called "equal to" comparison operator
 * Comparison operator will always return a boolean
 */
let isSame = 1 == 1
console.log('IsSame:', isSame); // true

/**
 * Logical operator it's a way to compare two booleans
 * 
 * Below operator (&&) is called "and" logical operator
 */
let isHaveDebt = true
let isHaveMoney = true
let isPaydebt = isHaveDebt && isHaveMoney
console.log('isPaydebt:', isPaydebt); // true

// More about boolean operators in https://www.w3schools.com/js/js_comparisons.asp

// A true boolean actually it just a 1 number
let boolean = true
let number = 1
console.log('Boolean plus number:', boolean + number) // 2

/**
 * In Javascript, a false is commonly consists of five things
 * (actually there's more that five, but these are the most common one)
 * 1. false
 * 2. empty string ('')
 * 3. zero and negative numbers (0)
 * 4. null
 * 5. undefined
 * 
 * They are called "falsy" values
 */

// empty string falsy
let emptyString = ''
if (emptyString) {
  console.log("emptyString:", "If we fill the string, it will be true");
} else {
  console.log("emptyString:", "Empty string is false"); // "Empty string is false"
}

// zero falsy
let zero = 0
if (zero) {
  console.log("zero:", "If we increase the number, it will be true");
} else {
  console.log("zero:", "If we decrease the number to zero and minus values, it will be false");
}

// null falsy
let nullVariable = null
if (nullVariable) {
  console.log("nullVariable:", "If we change the null to another non falsy value, it will be true");
} else {
  console.log("nullVariable:", "If we leave the value to be null, it will be false");
}

// undefined falsy
let undefinedVariable;
if (undefinedVariable) {
  console.log("undefinedVariable:", "If we fill the variable with a non falsy value, it will be true");
} else {
  console.log("undefinedVariable:", "If we leave the variable, not fill it with anything, it will be false");
}
// More about falsy values in https://developer.mozilla.org/en-US/docs/Glossary/Falsy

/**
 * Logical operators and falsy values
 * 
 * In Javascript, we often use logical / terniary opertor to decide what value
 * should be inside a variable
 */

// Terniary operator with comparison operator
let userAge = 50

let ageMessage = userAge > 0 ? "Thank you!" : "Please input the right age number"
console.log("ageMessage", ageMessage); // "Thank you!"

// Terniary operator with falsy operator
let userName = ""
let nameMessage = userName ? "Thank you!" : "Please input your name"
console.log("nameMessage", nameMessage); // "Please input your name"

// Logical (or) operator with truthy
let userParentAge = 55
let parentAgeMessage = userParentAge || "Please input the right age number"
console.log("parentAgeMessage", parentAgeMessage); // 55

// Logical (or) operator with falsy
let userPetAge = 0
let petNameMessage = userPetAge || "Please input the right age number"
console.log("petNameMessage", petNameMessage); // "Please input the right age number"

// Logical (and) operator with truthy
let userParentName = "William"
let parentNameMessage = userParentName && "Thank you for inputting name"
console.log("parentNameMessage", parentNameMessage); // "Thank you for inputting username"

// Logical (and) operator with falsy
let userSiblingName = ""
let siblingNameMessage = userSiblingName && "Thank you for inputting name"
console.log("siblingNameMessage", siblingNameMessage); // ""
