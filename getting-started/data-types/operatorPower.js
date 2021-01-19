var todayTemperature = 33
var tomorrowTemperature = 34
// operator perbandingan

console.log('\nSama dengan')
if (todayTemperature == tomorrowTemperature) {
  console.log('Cuaca hari ini sama dengan besok')
} else {
  console.log('Cuaca besok akan berbeda dari hari ini')
}

console.log('\nBasic equal')
// khusus perbandingan "==", JavaScript akan membandungkan nilai asli dari
// dari sebuah variabel, yang artinya:
if ("1" == 1) {
  console.log('Console log akan terpanggil')
}
// hal ini diperbolehkan JavaScript untuk membantu developer website
// untuk mengurus input yang diberikan user, karena seringkali yang
// user masukkan bertipe string, tetapi data yang didapat dari API
// berbentuk number

console.log('\nBasic equal vs strict equal')
// kita dapat menanggulangi hal ini dengan menggunakan "===" (strict equal)
if ("1" == 1) {
  console.log('Basic equal berhasil')
} else {
  console.log('Basic equal gagal')
}

console.log('\nStrict equal vs basic equal')
if ("1" === 1) {
  console.log('Strict equal gagal')
} else {
  console.log('Strict equal berfungsi!')
}


console.log('\nLebih dari')
if (todayTemperature > tomorrowTemperature) {
  console.log('Besok akan lebih dingin')
} else {
  console.log('Besok akan sama / lebih panas dari hari ini')
}

console.log('\noperator "dan"')
var isUserPremium = false
var isUserRegistered = true
if (isUserPremium && isUserRegistered) {
  console.log("Anda bebas dari iklan")
} else {
  console.log("Silahkan beli fitur premium untuk bebas dari iklan")
}

console.log('\noperator "atau"')
var isUserVerified = false
if (isUserVerified || isUserPremium) {
  console.log("Anda bebas dari iklan")
} else {
  console.log("Silahkan beli fitur premium untuk bebas dari iklan")
}

// list operator yang umumnya di gunakan:
// == Sama dengan
// != Tidak sama dengan
// > Lebih dari
// >= Lebih dari atau sama
// < Kurang dari
// <= Kurang dari atau sama
// && jika perbandingan kiri & kanan nya true, maka...
// || jika salah satu perbandingan kiri & kanan nya true, maka...

// for more, check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators