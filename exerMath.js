/*número aleatório entre dois valores --> (max - min) + mimn
const rand = Math.round(Math.random() * (25-5) + 5);
console.log(rand);
*/

const num = Number(prompt('Digite um número:'));
const numTitulo = document.getElementById("numEscolhido");
const textoDiv = document.getElementById("texto");

numTitulo.innerHTML = num;
textoDiv.innerHTML = 
`
    <p>Raiz quadrada: ${Math.sqrt(num)}</p> 
    <p>${num} é inteiro? ${Number.isInteger(num)}</p>
    <p>É NaN? ${Number.isNaN(num)}</p>
    <p>Arredonadado para baixo: ${Math.floor(num)}</p>
    <p>Arredonadado para cima: ${Math.ceil(num)}</p>
    <p>Com duas casas decimais: ${num.toFixed(2)}</p>
`;

