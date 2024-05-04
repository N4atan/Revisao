let nomes = [' NaTAn ', ' LiNdSeY    ', '           GABRIELA']
console.clear()

//b.
console.log('\nB.')
for(let i = 0; i < nomes.length; i++){
    nomes[i] = nomes[i].toLowerCase()
}
console.log(nomes)

//c.
console.log('\nC.')
for(let i = 0; i < nomes.length; i++){
    nomes[i] = nomes[i].toUpperCase()
}
console.log(nomes)

//d.
console.log('\nD.')
for(let i = 0; i < nomes.length; i++){
    nomes[i] = nomes[i].trim()
}
console.log(nomes)

//e.
console.log('\nE.')
for(let i = 0; i < nomes.length; i++){
    let nome = nomes[i]
    let aNoNome = nome.includes('A') //caso eu deixe includes('A', (algum numero, servira como ponto de partida da busca, ou seja, nao precisava estar em uum for))
    console.log(`No nome de numero ${i+1} da lista, tem a letra A? ${aNoNome} `)
}

//f.
console.log('\nF.')
for(let i = 0; i < nomes.length; i++){
    nomes[i] = nomes[i].replace(/A/g, '#')
}
console.log(nomes)

