//função que chama a si mesma

function recursiva(max) {
    //limita quando a função para
    console.log(max);
    if (max >= 10) return;
    //incrementando o num do parâmetro 
    max++;;
    recursiva(max);

}

recursiva(0);