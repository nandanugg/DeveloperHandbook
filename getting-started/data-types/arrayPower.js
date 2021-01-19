var nameList = [
  `Nanda`,
  'Rizka',
  'Din'
]
var weatherForecast = [33, 34, 31, 29, 33]
var isAllUserVote = [true, true, false]

console.log('\nAkses array entri pertama')
console.log(nameList[0])

console.log('\nMenggabungkan array jadi satu kata')
console.log(nameList.join('-'))

console.log('\nMemodifikasi setiap isi dari array')
console.log(
  weatherForecast.map(function (celcius) {
    return celcius + 4
  })
)

// for more, check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array