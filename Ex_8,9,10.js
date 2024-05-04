console.clear()
//8.
console.log('-------------8.-------------')
let aluno_Obj = {
    nome: 'Natan'   ,
    idade: 17   ,
    curso: 'Tecnico em Desenvolvimento de Sistemas'
}
console.log(`Nome: ${aluno_Obj.nome}`)
console.log(`Idade: ${aluno_Obj.idade}`)
console.log(`Curso: ${aluno_Obj.curso}`)



//9.
console.log('-------------9.-------------')
aluno_Obj.notas = []
aluno_Obj.notas.push(10, 8, 7)

let soma
for(let i = 0; i < aluno_Obj.notas.length; i++){
    soma+= aluno_Obj.notas[i]
}

let media = soma / aluno_Obj.notas.length

console.log(`Nome: ${aluno_Obj.nome}`)
console.log(`Idade: ${aluno_Obj.idade}`)
console.log(`Curso: ${aluno_Obj.curso}`)
console.log(`Notas: ${aluno_Obj.notas}`)
console.log(`Media das notas: ${media}`)


//10
console.log('-------------10.-------------')
aluno_Obj.endereço = {
    pais: 'Brasil'  ,
    anoNaEscola: 'Terceiro Ano do Ensino Medio' ,
    cidade: 'Sao Leopoldo'  ,
    rua: 'Rua Brasil'
}


console.log(`Nome: ${aluno_Obj.nome}`)
console.log(`Idade: ${aluno_Obj.idade}`)
console.log(`Curso: ${aluno_Obj.curso}`)
console.log(`Notas: ${aluno_Obj.notas}`)
console.log(`Media das notas: ${aluno_Obj.media}`)
console.log(`Endereço: ${aluno_Obj.endereço.pais}, ${aluno_Obj.endereço.cidade}, ${aluno_Obj.endereço.rua}`)
console.log(`Em qual ano escolar ele esta? ${aluno_Obj.endereço.anoNaEscola}`)

console.log('-----------------------------')