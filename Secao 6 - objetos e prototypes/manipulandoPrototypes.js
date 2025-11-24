const objA ={
    chaveA: 'A'
    //__proto__: Object.prototype
};

const objB ={
    chaveB: 'B'
    //__proto__: ObjA
};

//como que o proto do objB é o objA? --> basicamente, o objA vira pai do objB?
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);



////   outros exemplos
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
}


const produto1 = new Produto('Camisa', 50);
//produto1.desconto(100);
produto1.aumento(100);
console.log(produto1);

//Literal
const p2 ={
    nome: 'Caneco',
    preco: 10
}

//mudar o prototype faz p2 ser exibida como Produto, pega o constutor nér
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10)
console.log(p2);



//outro jeito
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
});
p3.desconto(50);
console.log(p3);