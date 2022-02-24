// converte de JSON para objeto literal
let dados = '{"nome":"marcus","idade":10,"altura":1.9}';
let dadosConvertidos = JSON.parse(dados);

console.log(dadosConvertidos);

// converte de objeto literal para JSON
let pessoa = {
    nome:'marcus',
    idade: 10,
    altura: 1.90
}

let pessoaDife = JSON.stringify(pessoa);
console.log(pessoaDife);