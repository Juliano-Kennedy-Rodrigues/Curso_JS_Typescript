//construtor. pega o cpf da pessoa e limpa ele, tirando , . - mas ainda é string
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
};


//metodo que retorna verdadeiro ou falso, para validações
ValidaCPF.prototype.valida =  function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length != 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);//pega os primeiro 9 digitos
    const digito1 = this.criaDigito(cpfParcial); //essa função é justamente para gerar esse priemiro digito, com as contas, usa o cpf parcial 705484450
    const digito2 = this.criaDigito(cpfParcial + digito1); //o segundo digito é gerado com a função de gerarDigito, mas usa a função parcial com o primeiro digito,7054844505 

    const novoCPF = cpfParcial + digito1 + digito2; //o cpf que geramos é o sem os 2 digitos (dado pelo user) + os dois digitos gerados na verificação

    return novoCPF === this.cpfLimpo; //só retorna true se o gerado for exatamente igual ao passado
};


//método que recebe números do cpf e faz o cálculo
ValidaCPF.prototype.criaDigito = function(cpfParcial){ //cpfParcial é o cpfLimpo sem os 2 digitos finais
    const cpfArray = Array.from(cpfParcial); //transforma cpfParcial em array
   
    //fazendo as contas
    let contatorRegressivo = cpfArray.length + 1; //para começar do 10 e ir até o 2, para multiplicar
    let total = cpfArray.reduce((ac, valAtual) => { //isso aqui só ta passando pelo array e subtraindo um a cada índice, do 10 ao 2
        //console.log(contatorRegressivo, valAtual);
        ac += (contatorRegressivo*Number(valAtual)); //acumulador é igual ao contador (10 a 2) vezes o valor (numero em si no array, 7 0 5 4 8 4...)
        contatorRegressivo--; //era 10 o contador, agora vai pro 9 e multiplica por 0
        return ac;
    }, 0);

    const digito = 11 - (total % 11); //conta que gera o priemiro digito final
    return digito > 9 ? '0': String(digito); //se o digito for maior que 9, reotna 0, senão retorna o digito (se for 10 retrna 0, senão retorna 1 a 9)
};

//para não ter 111,111,111-11 ... 999,999,999-99
ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) //repete o primeiro caracter 11 vezes
    return sequencia === this.cpfLimpo;
};


const cpf = new ValidaCPF('705,484,450-52');
//const cpf = new ValidaCPF('070,987,720-03');
//const cpf = new ValidaCPF('111,111,111-11');
//const cpf = new ValidaCPF('705,484,450-52');


if(cpf.valida()){
    console.log('cpf válido');
}else{
    console.log('cpf inválido');
}
