function Escopo() {
    const form = document.querySelector('form');
    const data = new Date();
    const dataCompleta = displayDate(data);

    function zeroEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function displayDate(data) {
        const h1 = form.querySelector('#h1');
        h1.innerHTML = '';

        let diaSemanaTexto;
        let mesTexto;

        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();
        const diaSemana = data.getDay();
        const hora = zeroEsquerda(data.getHours());
        const min = zeroEsquerda(data.getMinutes());

        switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo';
                break;
            case 1:
                diaSemanaTexto = 'Segunda-Feira';
                break;
            case 2:
                diaSemanaTexto = 'Terça-Feira';
                break;
            case 3:
                diaSemanaTexto = 'Quarta-Feira';
                break;
            case 4:
                diaSemanaTexto = 'Quinta-Feira';
                break;
            case 5:
                diaSemanaTexto = 'Sexta-Feira';
                break;
            case 6:
                diaSemanaTexto = 'Sábado';
                break;
        }

        switch (mes) {
            case 0:
                mesTexto = 'Janeiro';
                break;
            case 1:
                mesTexto = 'Fevereiro';
                break;
            case 2:
                mesTexto = 'Março';
                break;
            case 3:
                mesTexto = 'Abril';
                break;
            case 4:
                mesTexto = 'Maio';
                break;
            case 5:
                mesTexto = 'Junho';
                break;
            case 6:
                mesTexto = 'Julho';
                break;
            case 7:
                mesTexto = 'Agosto';
                break;
            case 8:
                mesTexto = 'Setembro';
                break;
            case 9:
                mesTexto = 'Outubro';
                break;
            case 10:
                mesTexto = 'Novembro';
                break;
            case 11:
                mesTexto = 'Dezembro';
                break;
        }


        return h1.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${min}`;
    }

}



Escopo();