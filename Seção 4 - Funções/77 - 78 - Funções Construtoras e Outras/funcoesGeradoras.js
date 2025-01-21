//recurso especial de "pausar" o cod, lazy evaluation

function* geradora1(){
    //é quase um return kkk 
    yield 'Valor 1';
    //cod 
    yield 'Valor 2';
    //cod 
    yield 'Valor 3';
}

const g1 = geradora1();
//esse next é um método do gerador
//cada vez que chamo um next, ele roda o código até um yield, em ordem 

/*
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
*/

for (let valor of g1){
    console.log(valor);
}

/*
//gerador infinito 
function geradora2(){
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2;
console.log(g2.next().value);
*/


//gerador que dekega funçãoes, mamacita 
function* geradora3(){
 yield 0;
 yield 1;
 yield 2;
}

//esse yield com * significa que ele vai fazer os yields da g3
function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

function* geradora5(){
    yield function(){
        console.log('vim do y1');
    };

    //cod

    yield function(){
        console.log('vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value; 
const func2 = g5.next().value; 
func1();
func2();