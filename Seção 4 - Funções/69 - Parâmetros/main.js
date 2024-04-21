//arguments --> todos os valores passados como parâmetro ao chmar uma função
//só funciona para funções criadas com function, arrowFunction não rola

function soma(a, b, c, d){
    let total = 0;
    for (let argumentos of arguments){
        total += argumentos;
    }

    //caso haja divergêncoia de quantidade de paâmetro/argumento, fica como undefined
    console.log("soma");
    console.log(total, a, b, c, d);
    console.log(" ");
}

soma(1, 2, 3);



//----------------------------------------------------------------------------------------------------------------------
//e se um desses parâmetros não receber valor? na criação dos parâmetros, da uma vlaor padrão
function funcao(a, b = 2){
    //um número + undefined
    console.log('funcao');
    console.log(a+b);
    console.log(" ");
}

//se mandar um valor como undefined assume que é o valor pré-definido
funcao(2, undefined);



//----------------------------------------------------------------------------------------------------------------------
//desestruturacão
function desestrutura ({nome, sobrenome, idade}){
    console.log("desestrutura");
    console.log(nome, sobrenome, idade);
    console.log(" ");
}

const info = {nome: 'Juliano', sobrenome: 'Rodrigues', idade: 20}
desestrutura(info);



//----------------------------------------------------------------------------------------------------------------------
//função conta
//...numeros --> rest operator --> recebe o resto dos argumentos em um array (tem que ser o último parâmetro)
const operacao = function (operador, contador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') contador += numero;
        if (operador === '-') contador -= numero;
        if (operador === '*') contador *= numero;
        if (operador === '/') contador /= numero;

    }

    console.log("operacao");
    console.log(contador);
    console.log(" ");
};

//o paámetro contador é o valor inicail. Então se for 200 e o operador for -, vai fazer 200-20 --> 180-30 --> 150-40
operacao('+', 0, 20, 30, 40, 50);