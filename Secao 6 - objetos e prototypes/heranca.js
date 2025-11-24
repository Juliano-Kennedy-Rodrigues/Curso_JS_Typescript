//camiseta --> nome, preço, cor, aumento(), desconto()
//caneca --> nome, preço, material, aumento(), desconto()
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor;
};
Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
};

//construtora para a camiseta
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); //simulando um new
    this.cor = cor;
}

//colocando o proto da Camiseta como o do Produto
Camiseta.prototype = Object.create(Produto.prototype); //cria um obj vazio e fala que o proto dele é o msm de Produto
Camiseta.prototype.constructor = Camiseta; //falando que o construtor de Camiseta é CAmiseta, para não usar o constructor no ptoto Produto

////////caneca

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype); 
Caneca.prototype.constructor = Caneca; 

const p1 = new Produto('Gen', 111);
const c1 = new Camiseta('Regata', 75, 'Preta');
const copao = new Caneca('Chá', 15, 'Cerâmica', 20);

c1.aumento(10);
copao.desconto(5);
copao.estoque = 10; //set

console.log(c1);
console.log(p1);
console.log(copao);
console.log(copao.estoque); //get




