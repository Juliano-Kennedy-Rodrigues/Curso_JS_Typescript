/* Operadores Aritiméticos
para traduzir string para número --> parseInt (inteiro), parseFloat (decimal)
const num1 = 2;
const num2 = Number('1.5');
console.log(num1+num2);
*/

/* FUNÇÕES NO NAVEGADOR
alert('Olá mundo!');
const confirma = confirm("Quer mesmo fechar?");
alert(confirma);
*/

/*
let num1 = prompt("Digite um número");
let num2 = prompt("Digite um número");

const soma = Number(num1) + Number(num2);
alert(soma);
alert(typeof soma);
*/

//exercício com variável 
let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);