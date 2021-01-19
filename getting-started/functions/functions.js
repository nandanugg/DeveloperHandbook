// Function is a collection of codes

// function have a structure, that is:
// 👇 function declaration
function
  // 👇 function name
  addDollarSign
  // 👇 parameter
  (number) {
  // 👇 function process
  const output = `$${number}`
  // 👇 return / result of the function
  return output
}
// example using function to fill a value
var itemValue = addDollarSign(200)
console.log(itemValue) // $200

// function have many differencies
// impure function
// is a function that contain some variable / function outside of it's scope
var startingMessage = 'The message is :' // 👈 this variable is used in showMessage function

function showMessage(message) {
  const output = `${startingMessage} ${message}`
  console.log(output)
}
// try to change this string and see what happens
showMessage("Halo semua!")

// pure function
// is a function that's not containing any variable / function outside of it's scope
function addExclamationMark(word) {
  // add an exlamation mark at the end of word
  const output = `${word}!`
  return output
}

// the return value is copied to variable
var addedExclamationWord = addExclamationMark("Budi")
console.log(addedExclamationWord) // Budi!
// or in short
console.log(addExclamationMark("Budiman")) // Budiman!

