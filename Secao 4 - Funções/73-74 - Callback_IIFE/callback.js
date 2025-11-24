function rand(min = 1000, max = 3000){
    const num = Math.random() * (max-min) + min;
    return Math.floor(num);
}

function f1(callback){
    //setTimeout para simular algo que demoraria, tipo acessar um server etc
    setTimeout(function(){
        console.log("f1");
        if(callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        console.log("f2");
        if(callback) callback();
    }, rand());

}

function f3(callback){
    setTimeout(function(){
        console.log("f3");
        if(callback) callback();
    }, rand());
}


//como executar isso nessa ordem, se não sabemos o tempo de resposta de cada função?
//faz callback
/*
f1();
f2();
f3();
console.log("Olá mundo!");
*/


//callback sem callbaack hell
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log("Olá mundo!");
}