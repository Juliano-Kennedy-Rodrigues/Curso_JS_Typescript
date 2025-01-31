//métodos se comportar de forma diferente 

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        //this.verSaldo();
        return console.log(`Saldo insuficiente R$${this.saldo}`);;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Agência: ${this.agencia}  Conta: ${this.conta}`);
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.sacar(22);

console.log();
console.log('----------------------------------------------------------------------------------------------------------------------------------------------'); 
// conta corrente e 

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// sobrescrevendo método sacar
ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor) { //pode sacar negativo, contanto que tenha limite
        //this.verSaldo();
        return console.log(`Saldo insuficiente ${this.saldo}`);;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const cc1 = new ContaCorrente(33, 44, 0, 100);
cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(1);


console.log();
console.log('----------------------------------------------------------------------------------------------------------------------------------------------'); 
// conta poupança para ver polimorfismo (se comportar diferente)


function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp1 = new ContaPoupanca(55, 66, 0);
cp1.depositar(10);
cp1.sacar(110); //não deixa
cp1.sacar(1);