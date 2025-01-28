//todas essas funções vão ter um proto com os métodos referenciados no pai do objeto, e quando chamamos, tenta pegar o proto da classe priemrio

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__

//coloca o método no proto, referenciado como o pai do objeto (Object.prototype). Melhora processamento, achor
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Juliano', 'K');
const pessoa2 = new Pessoa('Juliano', 'R');

console.log(pessoa1.nomeCompleto());