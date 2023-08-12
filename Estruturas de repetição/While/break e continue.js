const numeros = [1, 2, 3, 4, 5, 6, 7];

for ( let numero of numeros){

    if (numero === 2){
        console.log('pula numero 2');
        continue;//volta pro começo do laço mas pula essa função não executa nada abaixo dele
    }

    if (numero === 7){
        console.log('final');
        break;
    }

    console.log(numero);
}