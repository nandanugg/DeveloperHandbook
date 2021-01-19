// Nama gaya penulisannya
// Camel Case

// firstName (variabel)
// FirstName (Class)
// first_name (Pusat data / database)
// first-name (id / class di HTML)
// firstname jangan di pakai
// Firstname jangan di pakai

var firstName = "Mark"
var lastName = "Sudrajat"

console.log(`\nString tambah string`)
console.log(firstName + " " +  lastName)

console.log('\nString pakai backtick')
console.log(`${firstName} ${lastName}`)

console.log('\nPotong string pakai substring')
console.log(lastName.substring(0,5))

console.log('\nBuat string jadi huruf besar semua')
console.log(firstName.toUpperCase())

console.log('\nBuat string jadi huruf kecil semua')
console.log(firstName.toLowerCase())

console.log('\nString yang ada petik satunya')
console.log("Ma'ruf")

console.log('\nString yang ada petik duanya')
console.log('berkata "Dia bukan impostor!"')

console.log('\nString yang ada petik satu & duanya')
console.log(`Ma'ruf berkata "Dia bukan impostor!"`)

// for more, check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String