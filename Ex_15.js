const ask = require('readline-sync')

console.clear()
let num1 = Number(ask.question('Digite um numero.\nR:'))
let num2 = Number(ask.question('Agora digite outro numero.\nR:'))

let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let mod = num1 % num2

console.clear()
console.log(`${num1} + ${num2} = ${soma}`)
console.log(`${num1} - ${num2} = ${sub}`)
console.log(`${num1} x ${num2} = ${mult}`)
console.log(`${num1} : ${num2} = ${div}`)
console.log(`${num1} % ${num2} = ${mod}`)