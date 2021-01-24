/**
 * Run this file by using "node objectPower"
 * 
 * An object is a value containing sub values, it usually
 * used for hoding data that needs many variable to explain
 * like a user, a user have name, age, birthdate, and etc
 * 
 * The point is, there's a lot of things that can't be 
 * explained by one variable, that's why object is created
 */

// How to write it
let user = {
  name: "Nanda", // the "name" part is usually called property, and the "Nanda" part is the value
  age: 17,
  address: {
    city: 'Sleman',
    province: "DIY"
  },
  friends: ['Jauza', 'Wildan']
}

// Ways to access it
console.log('Access object propery:', user.name); // Nanda
console.log('Access object propery using string:', user["name"]); // Nanda
let propertyName = 'age'
console.log('Access object propery using variable:', user[propertyName]); // 17
console.log('Access object sub propery:', user.address.city); // Sleman
console.log('Access object sub array propery:', user.friends[1]); // Wildan

// How to add new property after object is created
user.catName = "meng"
console.log('Add new property:', user.catName); // meng

// How to delete a property
delete user.catName
console.log('Delete new property:', user.catName); // undefined

// because user.catName is already undefined, we can use it with if
if (user.catName) {
  console.log('user.catName:', "👀 do you add a catName property with truthy values?");
} else {
  console.log('user.catName:', "😁 undefined should be falsy");
}


// Object value is a bit different from normal values

// In normal values like string, boolean, number, and some unmentioned values...
let oldName = "Mark"
let newName = oldName // newName is copying value from oldName variable
console.log(newName); // "Mark"
oldName = "Brad" // so if we change the oldName, the newName will not be changed because newName copying instead of referencing

// But in object..
let city = {
  name: "Jakarta",
  island: 'Java'
}
let newCity = city // the newCity is referencing city object
console.log(newCity.name); // Jakarta

city.name = "Bandung" // if we change the city property value
console.log(newCity.name); // Bandung, the newCity will also follow, because it "referencing" instead of "copying"