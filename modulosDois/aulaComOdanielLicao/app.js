const filmes = require('./filmes')
const series = require('./series')

filmes.push('thor')
series.pop()

function maisFilmes(){
    filmes.push('pantera')
    return filmes;
}

function menosSeries(){
    series.pop()
    return series
}

console.log(menosSeries())
console.log(maisFilmes())
console.log(filmes);
console.log(series);

//
let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [marrocos, bariloche, barcelona, china, grecia] = destinosIncriveis;
console.log(bariloche, china)