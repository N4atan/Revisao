let generoFavorito 
//"ação", "comédia", "terror", "ficção" ou "aventura"

console.clear()
if (generoFavorito === 'ação'){
    console.log("Você gosta de filmes de ação! Explosões e perseguições são incríveis.")
} else if (generoFavorito === 'comédia'){
    console.log("Você gosta de filmes de comédia! Rir é o melhor remédio.")
} else if(generoFavorito === 'terror'){
    console.log("Você gosta de filmes de terror! Prepare-se para muitos sustos.")
} else if(generoFavorito === 'ficção'){
    console.log("Você gosta de filmes de ficção científica! Viaje para outros mundos e realidades.")
} else if (generoFavorito === 'aventura'){
    console.log("Você gosta de filmes de aventura! Explore lugares incríveis e enfrente desafios emocionantes.")
} else {
    console.log("Não sei qual é o seu gênero de filme favorito.")
}