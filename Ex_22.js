const ask = require('readline-sync')

let years = Number(ask.question('Quantos anos voce tem? '))

console.clear()
if(years >=18){
    console.log('VOCE PODE DIRIGIR!')
} else {
    console.log('VOCE NAO PODE DIRIGIR ! (legalmente falando)')
}