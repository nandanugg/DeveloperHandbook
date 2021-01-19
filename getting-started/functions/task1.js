// given this variable
const user = [
  {
    firstName: "Bob",
    lastName: "Surreal",
    occupancy: {
      countryId: "US",
      stateId: "California",
    },
    age: 34,
    jobTitle: 'Industrial worker',
    childrenCount: 3
  },
  {
    firstName: "Lerroy",
    lastName: "Mesaluna",
    occupancy: {
      countryId: "AE",
      stateId: "Batu",
    },
    age: 33,
    jobTitle: 'Bus driver',
    childrenCount: 1
  },
  {
    firstName: "Choi",
    lastName: "Xin Pang",
    occupancy: {
      countryId: "CN",
      stateId: "Shenzen",
    },
    age: 24,
    jobTitle: 'Industrial worker',
    childrenCount: 0
  },
]

// 1. change first user object in the first array by adding fullName key value using function with parameter
// requirement: console.log() the changed first user object outsite of the function
// hint: user[0].fullName
// 2. change second user object in the second array by adding wifeCount key value using function with paramteter
// requirement: console.log() the changed second user object outsite of the function
// hint: user[1].wifeCount 
// 3. a function that logs how many keys in third user object as parameter
// requirement: console.log() shows how many keys in inserted object
// hint: "this object has 4 keys"
// SUPER EXTRA TODO: Make the third task also count the sub object programmatically!

// ⚠️ Dont use Object.keys(), just use the loop! ⚠️