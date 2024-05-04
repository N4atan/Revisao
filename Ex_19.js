const ask = require('readline-sync')

console.clear()

let name = ask.question("What's your name? ")

console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.length)