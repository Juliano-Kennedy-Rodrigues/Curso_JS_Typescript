/* FOR IN
const frutas = ['Banana', 'Maça', 'Pera'];

//for in lê os índices ou chaves do objeto
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Juliano',
    sobrenome: 'Rodrigues',
    idade: '19'
}

console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); //para cada iteração no objeto, printa nome da tag e o conteudo
}
*/

//FOR OF

const nome = 'Juliano Rodrigues';
const nomeComposto = ['Juliano', 'Kennedy', 'Rodrigues']

//BÁSICO
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('-----------------------');

//FOR IN
for (let i in nome) {
    console.log(nome[i]);
}

console.log('-----------------------');

//FOR OF
//le cada índice e retorna o valor de cada um deles
for (let valor of nomeComposto) {
    console.log(valor);
}

console.log('-----------------------');

//FOR EACH

nomeComposto.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});