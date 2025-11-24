function criaPessoa(nome, sobrenome, peso, altura){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
           return  `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor){
            //divide o nome nos espaços e reotorna um array com a as palavras separadas no espaço
            valor = valor.split(' ');
            //retona o primeiro valor e tira do array
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        //função
        fala: function(assunto){
            return `${this.nome} está falando ${assunto}.`;
        },

        altura,
        peso,
        //getter
        get imc(){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Juliano', 'Rodrigues', 63, 1.63);
p1.nomeCompleto = 'Caelus Meu Amor';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('blablabla')); 
console.log(p1.imc)

//o this se refere a quem chamou, então p1 está chamando a função, nome é refernte a p1
// se eu tuvesse um p2, o this referenciaria a p2