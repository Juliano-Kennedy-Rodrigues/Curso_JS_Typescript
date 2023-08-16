/*
//try catch throw 

function soma (x, y){
    if (typeof x  != 'number' || typeof y != 'number'){
        throw new Error ("x e y precisam ser números");
    }

    return x + y;
}

try{
    console.log(soma(1,2));
    console.log(soma('a',2));
} catch(erro){
    //console.log(erro);
    console.log("Alguma coisa está errada");
}
*/

//try catch finally

function retornaHora (data){
    if ( data && !(data instanceof Date)){ //se data for enviada E/MAS não for uma instãncia de date 
        throw new TypeError ("Esperando instância de Date");
    }  
    
    if (!data){ // se data NÃO for enviada
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false //sem time zone (AM/PM)
    });
}

try {
    const hora = retornaHora(11);
    console.log(hora);
    
} catch (erro){
    //tratar erro
    console.log("Algo deu erado")
}finally{
    console.log("Tenha um bom dia");
}

