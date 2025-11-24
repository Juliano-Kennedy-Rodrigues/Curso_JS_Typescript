const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helene'},
]
/*
const novasPessoas = {};
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);

as chaves estão como strings e os ids tão em ordem crescente

{
  '1': { id: 1, nome: 'Helene' },
  '2': { id: 2, nome: 'Maria' },
  '3': { id: 3, nome: 'Luiz' }
}
*/

//como faz as chaves serem numbers e ficar na ordem original?

//new Map() cria um novo map, parece um dicionário, acho
const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa; //pessoa vira um array
    novasPessoas.set(id, {...pessoa});
}

console.log();
console.log(novasPessoas);
console.log();
console.log(novasPessoas.get(2));
console.log();


//desconstruindo
for (const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
}