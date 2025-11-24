function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa1 = criaPessoa('Juliano', 'Rodrigues');
console.log(pessoa1.nomeCompleto);


//constructor
// new crria um obj vazio {} e atrela .this ao novo obj
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

   // Object.freeze(this);
}

const pessoa2 = new Pessoa('Juliano', 'Kennedy');

