/* 
const tresHoras = 60 * 60 * 3 * 1000; //três horas 
const umDia = 60 * 60 * 24 * 1000; //um dia em milisseconds
const data = new Date(0 + tresHoras + umDia);
*/

//const data = new Date(2022, 8, 10, 20, 47, 24, 998); //cria data nesse exato momento (ano, mes, dia, hora, minuto, segundo, milisegundo) --> mes começa no 0

/*
//por string
const data = new Date('2022-09-10 20:55:59');
console.log('Dia ', data.getDate()); //pega o dia
console.log('Mês ', data.getMonth() +1); //começa no zero (mês menos um)
console.log('Ano ', data.getFullYear()); 
console.log('Hora ', data.getHours()); 
console.log('Min ', data.getMinutes()); 
console.log('Segundo ', data.getSeconds()); 
console.log('Milisegundo ', data.getMilliseconds()); 
console.log('Dia Semana ', data.getDay()); //domingo segunda etc (começa do zero - domingo - termina no seis - sab)
console.log(data.toString());

//console.log(Date.now()); pega a data de hj desde o dia 0 em milisegundos
*/

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}
function formatdaData(data) {
    const dia = zeroEsquerda(data.getDate()); //pega o dia
    const mes = zeroEsquerda(data.getMonth() + 1); //começa no zero (mês menos um)
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    const ms = zeroEsquerda(data.getMilliseconds());
    const diaSemana = zeroEsquerda(data.getDay() +1);
    return `${diaSemana} ${dia}/${mes}/${ano} ${hora}:${min}:${seg}:${ms}`;
}

const data = new Date();
const dataBR = formatdaData(data);
console.log(dataBR);