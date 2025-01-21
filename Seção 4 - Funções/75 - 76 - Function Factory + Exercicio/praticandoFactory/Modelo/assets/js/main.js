//fazendo a calculadora com factory function

function criaCalculadora() {
    return {
        //atributos
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes() { //this --> calc
            document.addEventListener('click', e => { //this --> document 
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
        
        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            //eval NÃO é muito seguro
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){alert('Conta inválida'); return;}
                this.display.value = String(conta);

            } catch (error) {
                alert('Conta inválida');
                return;
            }
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            });
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();