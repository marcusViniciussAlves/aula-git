for (let i = 1; i <= 10; i++){
    console.log(i * 7);
}

for (let i = 0; i <= 7; i++){
    console.log("palmeiras nao tem mundial")
}

//
function dobro (){
    return 2 * 2;
}

function triplo (){
    return 3 * 4;
}

function aplicar(dobro, triplo, callback){
    return callback;
}

aplicar(dobro, triplo)
console.log(aplicar)