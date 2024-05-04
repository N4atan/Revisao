function quadradO(base){
    let areaQuadrado = base * base
    console.log(`A area do quadrado que tem a base como ${base} é: ${areaQuadrado}`)
}

function retangulo(base, altura){
    let areaRetangulo = base * altura
    console.log(`O retangulo que tem como base: ${base} e a altura de: ${altura}. Possui a area equivalente a ${areaRetangulo}`)
}

function triangulo(base, altura){
    let areaTriangulo = (base*altura)/2
    console.log(`O triangulo que tem como base: ${base} e a altura de: ${altura}. Possui a area equivalente a ${areaTriangulo}`)
}

quadradO(5)
retangulo(10, 5)
triangulo(20, 15)