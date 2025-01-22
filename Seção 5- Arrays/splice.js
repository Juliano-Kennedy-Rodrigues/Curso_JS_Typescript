//função bem útil, que mexe no array original
//              -3           -2          -1
//               0            1           2
const nomes = ['Juliano', 'Kennedy', 'Rodrigues']

//nomes.splice(índiceMudança, deleteQuantos, elemento1, elemento2, elemento3) 
//fazendo pop com splice

var removidos = nomes.splice(1, 1) //remove um elemnto no índice 1. Kennedy era um e saiu, agora rodrigues é 1. Se falasse p/ tirar 2, Rodrigues saia tmb
console.log(nomes, removidos);

//adicionando elementos, sem remover nenhum
removidos = nomes.splice(1, 0, 'Kennedyy')
console.log(nomes, removidos);

//substituindo
removidos = nomes.splice(1, 1, 'Outro', 'Nome')
console.log(nomes, removidos);

//simulando o push, como o array vai do 0-3, tem q colocar um a mais como índice, para ir no fim de tudo
nomes.splice(nomes.length, 0, 'Cis')
console.log(nomes);

//simulando unshift, colocando no começo
nomes.splice(0, 0, 'Gatinha')
console.log(nomes);