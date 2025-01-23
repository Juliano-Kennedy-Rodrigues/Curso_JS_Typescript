//retorne os num menores que 10
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//filter não altera o array original, mas sempre retorn um array com a msm quantidade ou menos de elementos do original
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


// retornar pessoas com nome com 5 letras ou mais 
// retornar pessoas com 50 anos ou mais 
// retornar pessoas cujo nomes terminam em a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];

const pessoasNomes = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNomes);
console.log('-----------');

const pessoasidade = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasidade);
console.log('-----------');

const pessoasA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasA);
