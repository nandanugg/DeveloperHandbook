/**
 * Run this file by using "node methods"
 *
 * A method is a function that lies inside
 * objects, they usually used to modify the
 * object value, or just a collection of
 * function that organized into one object
 */

let user = {
  name: "Nanda",
  age: 17,
  address: {
    city: 'Sleman',
    province: "DIY"
  },
  friends: ['Jauza', 'Wildan'],
  // 👇 how to write a method
  greet() {
    /**
     * By writing a method, we will have a special access
     * to a code called "this"
     * 
     * "this" refers to current object that have the method
     * so if method greet() is inside user object, then
     * "this" will refer to user object
     */
    return `Hello! My name is ${this.name}, my age is ${this.age}
    I live in ${this.address.city} and I have many friends such as ${this.friends.join(', ')}`
  }
}

console.log(user.greet());

/**
 * In fact, all of data types in Javascript are objects
 */

// Methods in string values
let string = "this is string"
console.log(".toUpperCase():", string.toUpperCase());
console.log(".substr():", string.substr(5));
// More at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods

// Methods in number values
let number = 1.21345
console.log(".toFixed():", number.toFixed(2));
// More at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// There is no usable method in Boolean

// Methods in array
let friends = ['Akbar', "Siti", "Winda"]
console.log(".join():", friends.join());
console.log(".includes():", friends.includes("Siti"));
console.log(".map():", friends.map((friend) => {
  return `${friend} mah bro`
}));
// More at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

// In object, we create our own method 😁