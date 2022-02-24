let pessoa = ['marcus', 27, 1.80, true, ['futebol']];
console.log(pessoa[0]);
console.log(pessoa.length);

//push para inserir elementos no final
let humano = ['vinicius', 'edu', 'dudu', 'edu'];
humano.push('lilian');
console.log(humano);

//pop tira o ultimo item do array
let fruta = ['pera', 'mamao', 'abacaxi'];
fruta.pop();
console.log(fruta);

//let excluido = fruta.pop();
//console.log(excluido);

//unshift para inserir elementos no inicio
humano.unshift('igor');
console.log(humano);

//shift para retirar do inicio
fruta.shift();
console.log(fruta);

//index pergunta a posição de um array
console.log(pessoa.indexOf('marcus'));

//lastIndexof pergunta a posição de um array
console.log(humano.lastIndexOf('edu'));

//join para unir os elementos em um array
console.log(pessoa.join("-"));

