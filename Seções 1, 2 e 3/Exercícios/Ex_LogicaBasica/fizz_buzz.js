//se número divisivel pór tres - return fizz
//se for divisivel por 5 - return buzz
//se for divisivel por 3 e por 5 - fizz buzz
//se não for divisil por 3 e nem por 5 - retorna o próprio numero
//checar se o número é um numero, se não for - retorna a entrada 
//numeros de 0 a 100

/*
//fincionou ok

function fizz_buzz (num) {
    
    if (typeof(num) == 'number') {    
        if (num > 0 && num <= 100) {
            if (num % 3 == 0){
            if ( num % 5 == 0){
                return 'fizz buzz';
            }
        return 'fizz';
        }

        else if ( num % 5 == 0) {
         return 'buzz';
        }
    
        return num;
        }

        return num;
    }

    return num;
}

console.log(fizz_buzz(0))
*/

//simplificada

function fizzBuzz (numero) {
    if(typeof numero != 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'fizz buzz';
    if (numero % 3 === 0) return 'fizz';
    if (numero % 5 === 0) return 'buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}

