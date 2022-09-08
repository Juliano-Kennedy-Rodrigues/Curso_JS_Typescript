function Escopo(){
    const form = document.querySelector('.form');
    const div = document.querySelector('.div');

    function calcularIMC(pesoIMC, alturaIMC){
        const resultado = Number(pesoIMC) / (Number(alturaIMC)*Number(alturaIMC));
        return  resultado
    }

    function naoRecarrega(evento){
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const imc = calcularIMC(Number(peso.value), Number(altura.value));
        
        console.log(imc);

        if(peso.value != '' ||  altura.value != ''){
            div.innerHTML = "";
            if(imc < 18.5){
                div.innerHTML = `Seu IMC é de ${imc.toFixed(2)}. (Abaixo do peso) `;
            }else if(imc >= 18.5 && imc <= 24.99 ){
                div.innerHTML = `Seu IMC é de ${imc.toFixed(2)}. (Peso normal)`;
            }else if(imc >= 25 && imc <= 29.99){
                div.innerHTML = `Seu IMC é de ${imc.toFixed(2)}. (Sobrepeso)`;
            }else if(imc >= 30 && imc <= 34.99){
                div.innerHTML = `Seu IMC é de ${imc.toFixed(2)}. (Obesidade grau 1)`;
            }else if(imc >= 35 && imc <= 39.99){
                div.innerHTML = `Seu IMC é de ${imc.toFixed(2)}. (Obesidade grau 2)`;
            }else if(imc > 40){
                div.innerHTML += `Seu IMC é de ${imc.toFixed(2)}. (Obesidade grau 3)`;
            }
        }else{div.innerHTML = `Por favor, entre com seu peso e sua altura.`;}


    }

    form.addEventListener('submit', naoRecarrega);
}

Escopo();
