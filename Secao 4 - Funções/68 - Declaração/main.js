//funções são objetos de primeira classe (first-class objects)
//function expressions - salvar uma função numa variável. Comisso, da pra passar uma função como parâmetro de outra

const souUmDado = function(){
    console.log("Sou um dado");
};

function executaFuncao (funcao){
    funcao();
}

executaFuncao(souUmDado);

//Arrow Function
//const funcaoArrow = ()  => {}

const funcaoArrow = ()  => {
    console.log("Sou uma arrow function");
}

funcaoArrow();

setInterval(function () {

}, 1000);


//dentro de um obheto
const obj = {
    falar(){
        console.log("Estou falando");
    }
};

obj.falar();