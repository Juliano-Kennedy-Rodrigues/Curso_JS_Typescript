//data: 08/08/2023 aula 50 atribuição via desestruturação - arrays

/*
let a = "A";
let b = "B";
let c = "C";

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a,b, c);
*/

//const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

//const [um, dois, ...resto] = numeros;
//...rest pega o resto do array ...spread
//console.log(um, dois);
//console.log(resto);


//array dentro de array
const numbers = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];
const [, [, , seis]] = numbers;
console.log(seis);
console.log(numbers[2][1]);
