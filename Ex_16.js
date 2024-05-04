const ask = require('readline-sync')

console.clear()
let a = Number(ask.question('Digite um numero.\nR:'))
let b = Number(ask.question('Agora digite outro numero.\nR:'))

let igual = a === b
let diferente = a !== b
let maior = a > b
let maiorIgual = a >= b
let menor = a < b
let menorIgual = a <= b

console.clear()
console.log(`${a} === ${b} -> ${igual}`)
console.log(`${a} !== ${b} -> ${diferente}`)
console.log(`${a} > ${b} -> ${maior}`)
console.log(`${a} >= ${b} -> ${maiorIgual}`)
console.log(`${a} < ${b} -> ${menor}`)
console.log(`${a} <= ${b} -> ${menor}`)