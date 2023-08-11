const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); //computedStyle são as infos que o navegador computou quando carregou o arquivo
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


for (let p of ps) {
    console.log(p);
    p.style.backgroundColor = backgroundColorBody; //tag style acessa o css
    p.style.color = '#fff'; 
}

