// Funcions can also works like a variable

var variableFunction = function () {
  return "this is a function inside a variable"
}
console.log(variableFunction())

// or can be simplified as this (arrow function)
var variableArrowFunction = () => {
  return "this is a function inside a variable"
}
console.log(variableArrowFunction())

// this is called anonymous function, function without a name
// this function required in many occasions, usually as callbacks

// modifying each item in an array with .map()
var joinedNames = ["Budi", "Siti", "Halim"]
var botNames = joinedNames.map(
  // 👇 anonymous arrow function
  (name) => {
    return `${name}-bot`
  }
)
console.log(botNames)

setTimeout(
  // 👇 anonymous arrow function (as callback)
  () => {
    console.log('this log will be executed after 3000ms (3 seconds)');
  }, 3000);

// getting data from internet
const http = require('http')
const apiKey = `e53907a1-9417-4108-afca-bc5c4fba5780`
http.get({
  headers: {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  },
  host: 'api.thecatapi.com',
  path: '/v1/breeds?limit=1&page=0'
},
  // 👇 anonymous arrow function (as callback)
  (resp) => {
    let data = '';

    resp.on('data',
      // 👇 anonymous arrow function (as callback)
      (chunk) => {
        data += chunk
        console.log('Chunk received!');
      })

    resp.on('end',
      // 👇 anonymous arrow function (as callback)
      () => {
        console.log(JSON.parse(data))
      })
  })
// How to get data from API using NodeJs HTTP
// https://nodejs.org/en/knowledge/HTTP/clients/how-to-create-a-HTTP-request/
// credit to Cat API
// https://documenter.getpostman.com/view/5578104/RWgqUxxh