//como copiar obj p/ outro, se é valor passado pro ref?

const produto = {nome: 'Caneca', preco: 10};

//jeito mais fácil deve ser o spread nér
const outraCoisa = {...produto, material: 'veganismo'};

//object.assign()
const outraCoisaMais = Object.assign({}, produto, {material: 'porcelana'}); //copia tudo do produto pro objeto vazio


outraCoisa.nome = 'Vibes';
outraCoisa.preco = 20; //tão caro ser vibes...
console.log(outraCoisa);
console.log(produto);
console.log(outraCoisaMais);

//legal isso
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//console.log(Object.entries(produto));

for(let[chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}