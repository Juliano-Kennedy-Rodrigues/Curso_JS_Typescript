//immediately invoked function expression

(infos = function(idade, peso, altura){

    const sobrenome = "Rodrigues";
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome("Juliano"));
    }

    falaNome();
    console.log(idade, peso, altura);
})(20, 62, 1.64);

infos(30, 80, 1.80);

(numeroSorte = function(num = 3){
    console.log("Meu número da sorte é: " +num);
})();

numeroSorte(5);