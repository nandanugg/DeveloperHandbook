const userName = "whiskman" // 👈 this is global variable
// global variable is a variable that declared outside
// any scopes (like function or logics that using curly braces "{}")

function tellHello() {
  const message = "Hello World" // 👈 this is local variable
  // local variable is a variable that declared inside a scope
  console.log(`${message} ${userName}`) // 👈 you can use global variable inside any scopes
}

tellHello() // Hello World

console.log(message) // ReferenceError: message is not defined
// you can't access local variable outsite of it's scope
