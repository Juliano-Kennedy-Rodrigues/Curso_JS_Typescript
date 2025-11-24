//altera valores do array, gera um novo array com o mesmo tamnaho do original

//dobrar os valores
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(num => num*2);
console.log(numerosDobrados);

// para cada elemento:
// retornar apenas uma string com o nome da pessoa 
// remover apenas a chave "nome" do objeto
// adicionar uma chave "id" em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
console.log('---------------------------');


const removeNome = pessoas.map(obj => ({idade: obj.idade}));
console.log(removeNome);
console.log('---------------------------');

//criou o newObj com spread pra não alterar o array original ao add índice
const addId = pessoas.map(function (obj, indice){
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});
console.log(addId);
console.log('---------------------------');
console.log(pessoas);