// Sebuah object adalah variable yang isinya kumpulan variable lain
// seperti manusia, manusia memiliki nama awal, akhir, umur, teman, dll
// Sebuah objek umumnya digunakan untuk hal-hal yang tidak dapat 
// dijelaskan dengan satu variable saja, contohnya seperti:
// kegiatan, memiliki nama kegiatan, 
var user = {
  // 👇 key / property
  firstName:
    // 👇 value
    'Bib',
  // 👇 jika di gabung, jadinya property & value
  lastName: "Subabib", // 👈 bisa di baca "pada property lastName terdapat value 'subabbib'"
  age: 34,
  friends: [
    "Din",
    "Bia",
    "Nanda"
  ]
}

// cara mengakses value 'Bib'
console.log('\nAkses value "Bib"')
// 👇 masukkan property nya
console.log('hasil akses value "Bib" dengan memasukkan property:', user.firstName)
// 👇 bisa juga masukin property nya dengan string
console.log('hasil akses value "Bib" dengan memasukkan property string:', user["firstName"])

// menambah property & value baru
user.gender = 'female'
console.log('hasil user.gender:', user.gender)

// menghapus property & value yang sudah ada
delete user.friends
// jika tidak ada, maka hasil dari console.log() dibawah akan berisikan
// undefined, yang artinya tidak ada / tidak terdefinisikan
console.log('hasil delete user.friends:', user.friends)

// mengcopy property value firstName userRizka ke variabel
console.log('\nCopy firstName user')
var firstNameUser = user.firstName
console.log(firstNameUser)
firstNameUser = "Din"
console.log(firstNameUser)

console.log('\nMereferensi user')
// jika membuat variabel dengan isi objek, maka variabel tidak mengcopy objek, melainkan variabel hanya akan mereferensikan objek tersebut
var newUser = user
console.log(newUser.firstName)

// diarenakan variabel hanya mereferensikan, jika objek aslinya diubah property value nya, maka property value dari variabel akan ikut berubah
user.firstName = "Terserah deh"
console.log(newUser.firstName)

// for more, check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object