let dobro = (numeroA, numeroB) => numeroA * numeroB;
let triplo = (numeroC, numeroD) => numeroC * numeroD;

let aplicar = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(aplicar(2, 2, dobro));
console.log(aplicar(3, 4, triplo));



