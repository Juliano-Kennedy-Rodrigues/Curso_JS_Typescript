//return --> retorna um valor e termina uma função

function soma (a, b){
    return a+b;
}

//----------------------------------------------------------------------------------------
//função que cria obj

function criaPessoa(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome}
}

const p1 = criaPessoa("Juliano", "Rodrigues");
const p2= {nome: "Maria", sobrenome: "Rodrigues"};

console.log(p1, p2);
console.log("função obj")
console.log(" ");

//----------------------------------------------------------------------------------------
//maluqice mds

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    //retona a função sem executar ela
    return falaResto;
}

const olaMundo = falaFrase("Olá");

//mostra que a var olaMundo é a função falaResto, que é retornada quando chama a função falaFrase
console.log(olaMundo);

//se eu chamar olaMundo como uma função (a função falaResto) e passar o parâmetro que queria na função falaResto da certo
//quando chama olaMundo como var, passa o parâmetro da função falaFrase
//quando chama olaMundo como função, passa o parâmatro da função falaResto
//a função falaResto retorna o paâmetro de falaFrase e o seu próprio, ambos passados por olaMundo
console.log(olaMundo("mundo!"))

console.log("função maluca")
console.log(" ");

//----------------------------------------------------------------------------------------
//exemplo de uso dessa função que retorna função

function criaMultiplicador(multiplicador){
    //o parâmetro multiplicador está nesse escopo
    return function(n){
        return n * multiplicador;
    }
}

//passa parâmetro multiplicador
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

//passa parâmetro n
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

console.log("função maluca ex")
console.log(" ");
