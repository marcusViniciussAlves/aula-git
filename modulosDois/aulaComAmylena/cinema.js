let catalogo = require('./catalogo')

let adicionarFilme = filme => catalogo.push(filme);

adicionarFilme(
    {
        codigo: 3,
        titulo: 'Eternos',
        duracao: 3,
        atores: ['Starfox','Thena'],
        anoDeLancamento: 2021,
        emCartaz:true
    }
)

console.log(catalogo);

let buscarFilme = codigo => {
    for(let i = 0; i => catalogo.length; i++) {
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}

console.log(buscarFilme(1))

let alterarStatusEmCartaz = codigo => {
    for(let i = 0; i < buscarFilme.length; i++) {
        if(catalogo[i].emCartaz){
            catalogo[i].emCartaz = false
        }else{
            catalogo[i].emCartaz = true
        }
    }
}

console.log(alterarStatusEmCartaz(1))
console.log(catalogo[0])

//listar filmes em cartaz na array

let listarTodosOsFilmes = () => {
    for(let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i].titulo)
    }
}
//listarTodosOsFilmes()

//listar apenas filmes em cartaz na array
let listarFilmesEmCartaz = () => {
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].emCartaz){
            console.log(catalogo[i].titulo)
        }
    }
}

let alterarStatusEmCartaz = codigo => {
    for(let i = 0; i < buscarFilme.length; i++) {
        // if(catalogo[i].emCartaz){
        //     catalogo[i].emCartaz = false
        // }else{
        //     catalogo[i].emCartaz = true
        // }
        return catalogo[i].emCartaz ? catalogo[i].emCartaz = false : catalogo[i].emCartaz = true
    }
}
