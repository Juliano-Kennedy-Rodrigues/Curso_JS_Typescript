function Escopo(){
    const form = document.querySelector('form');

    function naoRecarrega(evento){
        evento.preventDefault();

        alert("!");
    }

    form.addEventListener('submit', naoRecarrega);
}

Escopo();