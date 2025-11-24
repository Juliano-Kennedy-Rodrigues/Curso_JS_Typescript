//closure - habilidade de acessar os escopos que tem acesso mesmo quando criados fora dele. ter ciência do seu escopo léxico
//o var nome foi criado do escopo da função mae, mas pode ser acessada pela função anônima filha

function retornaFuncao(nome){
    return function(){
        return nome;
        //essa função tem acesso a 3 escopos
        //o da mãe, o dela prórprio e o global
    };
}

const funcao = retornaFuncao("Juliano");
console.log(funcao());
const funcao2 = retornaFuncao("Rodrigues");
console.log(funcao2());