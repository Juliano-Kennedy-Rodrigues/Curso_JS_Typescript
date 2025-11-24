function Calculadora(){
    this.display = document.querySelector('.display'),

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    }


    this.cliqueBotoes = () => { 
        document.addEventListener('click', e => {  
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnDisplay(el);
            
            if(el.classList.contains('btn-clear')) this.clearDisplay(el);

            if(el.classList.contains('btn-del')) this.deleteOne(el);
        
            if(el.classList.contains('btn-eq')) this.realizarConta(el);
        });
    }



    this.btnDisplay = el => this.display.value += el.innerText;
    
    this.clearDisplay = el => this.display.value = '';

    this.deleteOne = el => this.display.value = this.display.value.slice(0, -1);

    this.realizarConta = function(el){
        let conta = this.display.value;
        
        try {
            conta = eval(conta);

            if(!conta){alert('Conta inválida'); return;}
            this.display.value = String(conta);

        } catch (error) {
            alert('Conta inválida');
            return;
        }
    }

    this.pressionaEnter = function  (){
        this.display.addEventListener('keyup', e =>{
            if(e.keyCode === 13){
                this.realizarConta()
            }
        });
    }
}

const calculadora = new Calculadora();
calculadora.inicia();