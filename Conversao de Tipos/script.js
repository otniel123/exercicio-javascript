let numero = 42.7;

let string = numero.toString();

let parse = parseInt(string);

let arredondamento = Math.round(numero);

console.log(typeof(string));
console.log(typeof(parse) + ": " + parse);
console.log("Número arredondado: " + arredondamento);