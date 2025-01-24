const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//concatenando filter map e reduce
const pares = numeros.filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

// pares [ 50, 80, 2, 8, 22 ]
// pares dobrados no map [ 100, 160, 4, 16, 44 ]
// pares dobrados somados com reduce 324
console.log(pares);