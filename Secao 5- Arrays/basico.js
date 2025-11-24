//delete apaga algo mas deixa o índice
const nomes  = ['Ju', 'Li', 'ano'];
nomes[1] = 'li';
delete nomes[2];
console.log(nomes);

/*
//array com construtor, funciona normal 
//const nomes = new Array('Ju', 'Li', 'ano');

//spread operator
const novo = [...nomes];

//tamanho do array
console.log(nomes.length);

//remover elementos do array (final)
const removido = nomes.pop()
console.log(nomes, removido);

//remover elemntos do array no começo (desloca os índices)
const removidoShift = nomes.shift();
console.log(nomes, removidoShift);

//adicionar elemntos no final do array
nomes.push('Kennedy');
nomes.push('Rodrigues');
console.log(nomes);

//adicionar no começo do array, pode dar ruim em array grande
nomes.unshift('Kennedy'); //vai pro zero primeiro
nomes.unshift('Rodrigues'); //vai pro zero depois, e passa Kennedy pro 1
console.log(nomes);
*/


//cortando array
const sobrenomes = ['Rodrigues', 'Faria', 'Silva', 'Teixeira', 'Adami'];
const novo = sobrenomes.slice(1, 3 ); //indice em que começa e o que termina, mas não mostra
console.log(novo);

/*
//slice com negativo
const sobrenomes = ['Rodrigues', 'Faria', 'Silva', 'Teixeira', 'Adami'];
const novo = sobrenomes.slice(0, -1 ); //pega tudo apartir do primeiro índice, até um antes do último índice
console.log(novo);
*/


//string para array
const meuNome = 'Juliano Kennedy Rodrigues';
const meuNomeSeparado = meuNome.split(' ');
console.log(meuNomeSeparado);


//de array para string
const stringArray = ['Juliano', 'kennedy', 'Rodrigues'];
const arrayString = stringArray.join(' ');
console.log(arrayString);