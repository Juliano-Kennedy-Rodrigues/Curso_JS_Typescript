function getTimeFromSeconds (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const contador = document.querySelector('.contador');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
const pausar = document.querySelector('.pausar');
let segundos = 0;
let timer;

function iniciarContagem() {
     timer = setInterval(function() {
        segundos++;
        contador.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)

}
document.addEventListener('click', function (e) {
    const el = e.target;

    if(el.classList.contains('iniciar')) {
        contador.classList.remove('pausado')
        clearInterval(timer);
        iniciarContagem();
    }

    if(el.classList.contains('zerar')) {
        clearInterval(timer);
        contador.innerHTML = "00:00:00";
        segundos = 0;
    }

    if(el.classList.contains('pausar')) {
        clearInterval(timer);
        contador.classList.add('pausado')
    }
})
