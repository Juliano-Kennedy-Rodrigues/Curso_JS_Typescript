function Produto(nome, preco, estoque){
    //publico
    this.nome = nome;
    this.preco = preco;

    //não usar as propriedade this. nos getters e setters, gera loop
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //para que o estoque possa ser exibido, mesmo não sendo declarado publicamente
        configurable: true, //pode editar, apgar ou reconfigurar a chave?
        
        //se eu precisar que ESTOQUE seja apenas numeros, como faz?
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor != 'number'){
                throw new TypeError('só numeros bb');
            }

            estoquePrivado = valor;
        }
    });

}

const p1 = new Produto('Camiseta', 20, 2);
console.log(p1);
//p1.estoque = 'Valor';
p1.estoque = 20;
console.log(p1.estoque);


//outro exemplo
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camisa');
p2.nome = 'Outra coisa.';
console.log(p2.nome);