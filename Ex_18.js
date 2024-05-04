const ask = require('readline-sync')

let numeros = []

console.log('Sera pedido 5 numeros inteiros, por favor responda :)')
for(let i = 0; i < 5; i++){
    let asnwerUser = Number(ask.question(`${i}- Me diga um numero.\nR:`))

    numeros.push(asnwerUser)
    console.clear()
}

let soma = 0
for(let i = 0; i<numeros.length; i++){
    soma+= numeros[i]
}

let media = soma / 5
console.log('A media é:', media)