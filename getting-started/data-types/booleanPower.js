console.log('\nBoolean biasa')
var isExecuteCommand = true
if (isExecuteCommand) {
  console.log("Command executed!")
}

console.log('\nFalsy number')
var userCount = 0
if (userCount) {
  console.log(`There are ${userCount} users here!`)
} else {
  console.log("No users, so sad 😭")
}

console.log('\nFalsy string')
var userInput = ""
if (userInput) {
  console.log(`your input is ${userInput}`)
} else {
  console.log('please input something 🥺')
}

console.log('\nFalsy null')
var userGender = null
if (userGender) {
  console.log(`your gender is ${userGender}`)
} else {
  console.log("User choosed to not say it's gender")
}

// for more, check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean