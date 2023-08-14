/*
//while para iterar  a stirng (melhor usar o for kkk)
const nome = 'Luiza';
let i = 0;

while (i < nome.length) {
    console.log(i);
    i++;
}
*/


//WHILE BÁSICO
function random (min, max){
    const rand = Math.random() * (max-min) + min;
    return Math.floor(rand);
}

const min = 0;
const max = 50
let rand = 10;

while (rand !== 10){
    rand = random(min, max)
    console.log(rand);
}

console.log('##########');

do {
    rand = random(min, max)
    console.log(rand);
} while (rand !== 10);

