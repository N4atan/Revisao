const ask = require('readline-sync')

console.clear()
let numberUser = Number(ask.question('System: Diz um numero rapá! Que vou contar até ele. \nR:'))

let contagem = 0
while(contagem < numberUser){
    console.log(contagem)
    contagem++
}