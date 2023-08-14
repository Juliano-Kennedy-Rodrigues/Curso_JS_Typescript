//------------------------------------------------------------
//VARIÁVEIS (com let)
/*
    let nome1 = "João"; //declarando e inicializando
    let nome; //declarndo
    console.log(nome1);
    nome = "Juliano" //inicializando
    console.log(nome);
    nome = "Júlio"; //inicializando 
    console.log(nome);
*/

//------------------------------------------------------------
//VARIÁVEIS CONSTANTES 
/* Não pode mudar valor da const, inicializa com a declaração

const num = 4;
const numero = 5;
const soma = num + numero;
const dobroNum = num *2;
const multiplicado = num * numero;

console.log(soma, dobroNum, multiplicado);
console.log(typeof num);
*/

//------------------------------------------------------------
//EXERCÍCIOS SOBRE VARIAVEIS

//Juliano Rodrigues tem 18 anos, 52kg, mede 1.64m e nasceu no ano ?, imc ?

const nome = "Juliano";
const sobrenome = "Rodrigues";
const idade = 18;
const peso = 52;
const altura = 1.64;
let imc;
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento = 2022-18;

console.log(nome, sobrenome + ' tem ' + idade + ' anos, '+ peso +"kg, " + 'mede ' + altura + 'm e nasceu no ano de ', anoNascimento + '; imc: ' + imc )

//template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, ${peso}kg, mede ${altura}m e nasceu no ano de ${anoNascimento}; imc: ${imc}` )

