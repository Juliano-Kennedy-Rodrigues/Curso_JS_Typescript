//array com objetos
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const conatainer = document.querySelector('.container');
const div = document.createElement('div');
/*
//com innerHTML
for ( let i=0; i< elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}
*/

//com innerTEXT
for ( let i=0; i< elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada);
}

conatainer.appendChild(div);