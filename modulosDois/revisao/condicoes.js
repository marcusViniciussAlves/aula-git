//condicao ? verdadeiro : falso

//console.log(0 < 10 ? 'Sim' : 'Não')

const ehMaiorIdade = (idade) => {
    return idade > 17 ? 'Sim' : 'Não';
}

//console.log(ehMaiorIdade(15))

const fruta = 'Laranja';
switch(fruta) {
    case 'Laranjas':
        console.log('30 laranjas por R$ 10,00')
        break;
    case 'Mangas':
        console.log('5 mangas por R$ 5,00')
        break
    case 'Mamão':
        console.log('6 mamões por R$ 12,00')
        break;
    default:
        console.log('Desculpe, não temos nenhuma oferta para essa fruta')
}