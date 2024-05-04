const ask = require('readline-sync')

console.clear()
let name = ask.question("What's your name? ")
let years = Number(ask.question('Quantos anos voce tem? '))
let city = ask.question("Qual cidade voce mora? ")

let pessoaObj = {
    name    ,
    years   ,
    city    ,
}

console.clear()
console.log(pessoaObj.name)
console.log(pessoaObj.years)
console.log(pessoaObj.city)