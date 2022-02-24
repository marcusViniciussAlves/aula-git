let pais = {
    nome: "brasil",
    capital: "brasilia",
    nacionalidade: function(){
        return "sou do " + this.nome;
    }
};

console.log(pais.nome);
console.log(pais["capital"]);
console.log(pais.nacionalidade());

let carro = {
    marca: 'fiat',
    modelo: 'punto',
};

function Carro(valorMarca, valorModelo){
    this.marca  = valorMarca;
    this.modelo = valorModelo;
};

console.log(carro);

console.log(new Carro( 'bmw', 'X2'));
