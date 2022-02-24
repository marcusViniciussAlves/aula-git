// função declarada
function darOi(){
    console.log('Bom dia, tudo bem?');
}
darOi();

// função expressa
let soma = function (){
    console.log(2+2);
}
soma();

let somar = function (numA, numB){
    console.log(numA+numB)
}
somar(50, 40);

let subtrair = function (numC, numD){
    return numC - numD;
}
let resultado = subtrair(2, 1);
console.log(resultado);

// escopo
let resultado = 0;
console.log('resultado fora da funcao =', resultado);

//
function multiplicar(numE, numF){
   var resultado = numE*numF;
    console.log('resultado dentro da funcao =', resultado);
}

multiplicar(5, 4);