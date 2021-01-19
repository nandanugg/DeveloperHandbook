/**
 * Run this file by using "node booleanPower"
 * 
 * A boolean is a value that have logical meaning, commonly used for ifs
 */

// How to write it
let isRaining = false
let isSunny = true

// How to use it in if
if (isRaining) {
  console.log('IsRaining if:', "Today is raining"); // this will be called
} else {
  console.log('IsRaining if:', "Today isn't raining");
}

// Boolean can also be written in boolean operator
// Below opearor (==) is called "equal to" comparison operator
let isSame = 1 == 1
console.log('IsSame:', isSame); // true

// Below operator (&&) is called "and" logical operator
// the (!) is called negation, it reverts the value from false to true and vice versa
let isGoodDay = !isRaining && isSunny // if isRaining = false AND isSunny = true
console.log('isGoodDay:', isGoodDay); // true

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
 */

// empty string falsy
let emptyString = ''
if (emptyString) {
  console.log("emptyString:", "A");
} else {
  console.log("emptyString:", "B"); // this will be shown
}

// zero falsy
let zero = 0
if (zero) {
  console.log("zero:", "A");
} else {
  console.log("zero:", "B"); // this will be shown
}

// null falsy
let nullValue = null
if (nullValue) {
  console.log("nullValue:", "A");
} else {
  console.log("nullValue:", "B"); // this will be shown
}

// undefined falsy will be shown in object explanation
// More about falsy values in https://developer.mozilla.org/en-US/docs/Glossary/Falsy