//data: 08/08/2023 aula 50 atribuição via desestruturação - objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
}

/*
const { nome = '', sobrenome, endereco: {rua: r, numero}, endereco } = pessoa;
console.log(nome, sobrenome, r, numero, endereco);
*/

const { nome, ...resto} = pessoa;
console.log(nome, resto);
