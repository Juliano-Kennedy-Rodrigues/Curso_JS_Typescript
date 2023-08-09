//função geral para proteger dados
function Escopo(){
    const form = document.querySelector('.form'); //pega form e div pela classe (.nomeDaClasse)
    const resultados = document.querySelector('.resultados');

    const array = []; //cria array vazio para receber valores do objeto 

    function recebeEventoForm(evento){ //função chamada pelo eventListener
        evento.preventDefault();// previne recarregamento da pagina qnd da submit (botão)

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //console.log(nome.value, sobrenome.value, peso.value, altura.value);

        array.push({ //envia os valores pro array em forma de objeto
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(`Nome: ${nome.value}, Sobrenome:${sobrenome.value}, Peso:${peso.value}, Altura:${altura.value}.`);
        resultados.innerHTML += `Nome: ${nome.value}, Sobrenome:${sobrenome.value}, Peso:${peso.value}, Altura:${altura.value}.`;
    }

    form.addEventListener('submit', recebeEventoForm); //fica vendo se, no form, foi dado submit.Se foi,chama função
}

Escopo();
