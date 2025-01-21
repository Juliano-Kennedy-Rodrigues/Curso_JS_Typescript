//retorna objetos, começa o nome com letra maiuscula, e usa a palavra NEW

function Pessoa(nome, sobrenome) {
    //privado
    const ID = 123456;
    const metodoInterno = function(){

    }

    //publicos, imagino que pelo this?
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Juliano', 'Rodrigues');
p1.metodo();