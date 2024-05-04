const ask = require('readline-sync')

console.clear()
let numberUser = Number(ask.question('System: Diz um numero rapá! Que vou falar todos os pares até ele. \nR:'))

for(let i = 0; i < numberUser; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}