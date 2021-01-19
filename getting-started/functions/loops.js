// there are many types of loop
// classic loop
const loopTimes = 5
for (let index = 0; index < loopTimes; index++) {
  console.log(`loop for number ${index}`);
}

// while loop
let i = 0;
while (i < loopTimes) {
  console.log(`loop while number ${i}`);
  i++;
}


// for in loop (for looping object value)
const user = {
  firstName: "odading",
  lastName: "mang oleh"
}
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    const element = user[key];
    console.log(`loop object value with value ${element}`);
  }
}

// for of loop (for looping array items)
const temperatures = [32, 33, 31, 29, 18]
for (const temperature of temperatures) {
  console.log(`loop array with for of loop ${temperature}`);
}

// forEach loop (for looping array items)
temperatures.forEach(function (temperature) {
  console.log(`loop array with for each loop ${temperature}`)
})