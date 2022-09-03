/*ARRAYS
let nomes = ['Juli', 'Duda', 'Vivi']; 

//nomes[nomes.length] = 'Karol'; //colocar mais um índice no final
//nomes.push('Karol'); //colocar mais um índice no final
//nomes.unshift('Karol'); //adicionar indice no começo no array
//const retirado = nomes.pop(); //apagar último indice do array
//const retirado = nomes.shift(); //apagar primeiro indice do array
//console.log(`Nome retirado: ${retirado}`);

nomes.push('Karol');
nomes.push('Túlio');
console.log(nomes.slice(1, 4)); //selecionar com slice é igual as strings. Funciona com negativo. nomes.slice(1,-1)
*/

//--------------------------------------------------------------------------------------------------------------------------------
/*FUNÇÕES

function soma (x, y){ //normal
    const resultado = x +y;
    return resultado;
}

console.log(soma(5, 5));

const pot = function (x, y){ //função anon
    const resultado = x ** y;
    return resultado;
}

console.log(pot(4, 2)); 

const raiz = n =>  n ** 0.5; //ARROW. Não precisa do return e se só tem 1 parametro não precisa de parenteses.

console.log(raiz(25));
*/

//--------------------------------------------------------------------------------------------------------------------------------
//OBJETOS
/*
const pessoa1 = {
    nome: 'Juliano',
    sobrenome: 'Rodrigues',
    idade: 18
}

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);*/
/*
function criarPessoa(nome, sobremome, idade){
    return{
        nome, sobremome,idade
        //qnd fica, exemplo. nome: nome ... pode deixar sem repetir
    };
}

const pessoa01 = criarPessoa('Juliano', 'Rodrigues', 18);
console.log(pessoa01);
const pessoa02 = criarPessoa('Jonas', 'Rodrigues', 29);
console.log(pessoa02);
*/

const pessoa ={
    nome: 'Juliano',
    sobrenome: "Rodrigues",
    idade: 18,

    //criando método --> função sem function na frente
    fala(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    },

    incrementaIdade(){
        this.idade++;
        this.fala();
    }
};

pessoa.fala();
pessoa.incrementaIdade();