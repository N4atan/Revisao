let idadePraDirigir = false
let carta = false
let carroProprio = false

console.clear()
if(idadePraDirigir && carta){
    console.log('Voce pode dirigir legalmente!')
} else if (carroProprio || carta){
    console.log("Voce pode dirigir, mas seja cuidadoso!")
} else {
    console.log("Voce nao pode dirigir!")
}