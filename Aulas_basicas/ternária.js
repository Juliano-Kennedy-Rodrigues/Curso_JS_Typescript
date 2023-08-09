//(condição) ? 'verdadeira' : 'falsa';

const pontosUser = 500;
const tipoUser =  pontosUser >= 1000 ? "VIP" : "PADRÃO"; //tipo um if e else

const corUser = null;
const corPadrao = corUser || 'ROXO'; //ou é a cor do user (var) ou é uma cor pré determinada
console.log(tipoUser, corPadrao);

/*
if (pontosUser >= 1000){
    console.log("VIP");
}else {console.log("PADRÃO");}
*/
