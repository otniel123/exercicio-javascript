let operacao = "multiplicação";
let numero1 = 57;
let numero2 = 20;

switch(operacao){
    case "soma":
        console.log("Soma de " + numero1 + " + " + numero2 + ": " + (numero1 + numero2));
        break;
    case "subtração":
        console.log("Subtração de " + numero1 + " - " + numero2 + ": " + (numero1 - numero2));
        break;
    case "divisão":
        console.log("Divisão de " + numero1 + " / " + numero2 + ": " + (numero1 / numero2));
        break;
    case "multiplicação":
        console.log("Multiplicação de " + numero1 + " X " + numero2 + ": " + (numero1 * numero2));
        break;
    default:
        console.log("Operação não especificada");            
}