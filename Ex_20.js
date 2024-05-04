const ask = require('readline-sync')

function soma(num1, num2){
    return num1 + num2
}


console.clear()
let firstNumber = Number(ask.question('Diga um numero. '))
let secondNumber = Number(ask.question('Diga outro numero. '))

console.log(soma(firstNumber,  secondNumber))