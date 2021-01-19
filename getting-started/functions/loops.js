/**
 * Run this file by using "node loops"
 *
 * A loop is usually used for doing a processing
 * for each data recieved, there are some other usecases
 * too that we will find along the way for being a developer
 */

// there are many types of loop

// classic loop
const loopTimes = 5
for (let index = 0; index < loopTimes; index++) {
  console.log(`loop for number ${index}`);
}

// while loop
let i = 0;
while (i < loopTimes) {
  i++; // 👈 we must include this otherwise it will be in infinite loop!
  console.log(`loop while number ${i}`);
}


// for in loop (for looping object value)
const user = {
  firstName: "odading",
  lastName: "mang oleh"
}
for (const key in user) {
  const element = user[key];
  console.log(`loop object value with value ${element}`);
}

// for of loop (for looping array items)
const temperatures = [32, 33, 31, 29, 18]
for (const temperature of temperatures) {
  console.log(`loop array with for of loop ${temperature}`);
}