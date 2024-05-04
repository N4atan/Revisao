const ask = require('readline-sync')

console.clear()
let resposta1 = ask.question('Escolha 1: True ou False.\nR:').toLowerCase()
let resposta2 = ask.question('Escolha 1: True ou False.\nR:').toLowerCase()

resposta1 = resposta1 === 'true';
resposta2 = resposta2 === 'true';



console.log('\nOperador AND (&&):', resposta1 && resposta2)
console.log('Operador OR (||):', resposta1 || resposta2)
console.log('Operador NOT (!) para resposta 1:', !resposta1)
console.log('Operador NOT (!) para resposta 2:', !resposta2)
