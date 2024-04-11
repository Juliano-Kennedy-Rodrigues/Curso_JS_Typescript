
const inputTarefa = document.querySelector('.input-tarefa');
const btnAdd = document.querySelector('.btn-add');
const listaTarefas = document.querySelector('.tarefas');


inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnAdd.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//clicando botão de apagar remove o elemento pai
document.addEventListener('click', function(e) {
    const el = e.target;
    
    if(el.classList.contains('btn-apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
});


function limpaInput(){
    inputTarefa.value = "";
    inputTarefa.focus();

}
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'btn-apagar');
    li.appendChild(botaoApagar);
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}



function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

function salvarTarefa(){
    const liTarefas = listaTarefas.querySelectorAll('li');
    const arrayListaTarefas = [];

    for (let tarefa of liTarefas){
        let txtTarefa = tarefa.innerText;
        txtTarefa = txtTarefa.replace('Apagar', '').trim();
        arrayListaTarefas.push(txtTarefa);
    }
    //console.log(arrayListaTarefas);
    //console.log(typeof(arrayListaTarefas));
    const tarefasJSON = JSON.stringify(arrayListaTarefas);
    //console.log(tarefasJSON);
    //console.log(typeof(tarefasJSON));
    localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefaSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    //console.log(tarefas);
    //console.log(typeof(tarefas));
    const listaDeTarefas = JSON.parse(tarefas);
    //console.log(listaDeTarefas);
    //console.log(typeof(listaDeTarefas));

    for( let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

addTarefaSalvas();