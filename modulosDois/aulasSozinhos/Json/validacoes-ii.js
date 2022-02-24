let dia = 'terça';

let semana = dia == 'domingo'? "vou para a praia":"vou trabalhar";
console.log(semana);

switch(dia){
    case "segunda":
        console.log('vou tomar banho');
        break;
        case "quarta":
            console.log("vou ao chuveiro");
            break;
            default:
                console.log("vou dormir")
}