function Produto(nome, preco, estoque){
    //publico
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //para que o estoque possa ser exibido, mesmo não sendo declarado publicamente
        value: estoque, //valor da chave
        writable: true, //pode alterar o valor de estoque?
        configurable: false //pode editar, apgar ou reconfigurar a chave?
    });


    //mais de uma
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //para que o estoque possa ser exibido, mesmo não sendo declarado publicamente
            value: nome, //valor da chave
            writable: true, //pode alterar o valor de estoque?
            configurable: true //pode editar, apgar ou reconfigurar a chave?
        },
        preco: {
            enumerable: true, //para que o estoque possa ser exibido, mesmo não sendo declarado publicamente
            value: preco, //valor da chave
            writable: true, //pode alterar o valor de estoque?
            configurable: false //pode editar, apgar ou reconfigurar a chave?
        },
    });
}

const p1 = new Produto('Camiseta', 20, 2);
console.log(p1);

for(chave in p1){
    console.log(chave);
}