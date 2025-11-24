//bem trans e versátil
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// formato da função e usando reduce para somar td
const formato = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0); // --> valor inicial do acumulador, sem ele, é o valor no primeiro elemento 
console.log(formato);


// reproduzindo filter --> retornar array com os pares
const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
        return acumulador;
    
}, []);
console.log(pares);


// reproduzindo map --> retornar array com dobro de cada valor
const dobro = numeros.reduce(function(acumulador, valor){
     acumulador.push(valor*2);
        return acumulador;
    
}, []);
console.log(dobro);


//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'wallace', idade: 47},
];

const velhote = pessoas.reduce(function (acumulador, prox) {
    if (acumulador.idade > prox.idade) return acumulador;
    return prox; //prox é de prxima linha, pq o acumulador é a primeira 
});
console.log(velhote);