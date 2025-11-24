//literal
const pessoa ={
    nome: 'Juliano',
    sobrenome: 'Rodrigues'
};

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['nome']);
console.log(pessoa.nome);




//construtor
const pessoa1 = new Object();
pessoa1.nome = 'Juliano';
pessoa1.sobrenome = 'Kennedy';
pessoa1.idade = 21;
console.log(pessoa1.nome, pessoa1.sobrenome);

delete pessoa1.nome;
console.log(pessoa1);




//métodos 
pessoa1.falarNome = function(){
    return (`Meu sobrenome é ${this.sobrenome}`);
}
pessoa1.falarNome();

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDataNascimento()); 


for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}