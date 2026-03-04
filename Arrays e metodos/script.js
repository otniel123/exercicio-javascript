let array = [10, 25, 3, 47, 8, 16];

let araryMaiorQue10 = array.filter(num => num > 10);
let arrayMultiplicado = array.map(num => num * 2);
array.sort((a, b) => a -b);

console.log("Array maior que 10 = " + araryMaiorQue10);
console.log("Array multiplicado = " + arrayMultiplicado);
console.log("Array ordenado = " + array);

let arrayNomes = ['Ana', 'Bia', 'Carlos', 'Amanda', 'Bruno'];

let arrayNomesFiltrado = arrayNomes.filter(nome => nome.startsWith('A')).map(nome => nome.toUpperCase());

console.log("Array de nomes com métodos aplicados: " + arrayNomesFiltrado);

let total = 0;
let totalNumeros = 0;
let arrayMedia = [18, 25, 32, 11, 9, 45];

for(let i = 0; i < arrayMedia.length; i++){
    total = total + arrayMedia[i];
}

console.log("Média = " + total / arrayMedia.length)


arrayMedia.forEach(numero => {
    totalNumeros = totalNumeros + numero;
})

console.log("Média ocm for each = " + totalNumeros / arrayMedia.length);