
const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btntroca = document.getElementById("btn-troca");

btntroca.addEventListener( 'click', () => {
    nomeSaida.textContent = nomeEntrada.value;
});

btntroca.addEventListener( 'mouseenter', () => {
    nomeSaida.style.color = "#0026fd";
});

btntroca.addEventListener( 'mouseout', () => {
    nomeSaida.style.color = "#000";
});

// Trocandoa a cor da caixa


const btnVerde = document.getElementById("btn-verde");
const btnAmarelo = document.getElementById("btn-amarelo");
const btnAzul = document.getElementById("btn-azul");
const caixa = document.getElementById("caixa");

btnVerde.addEventListener( 'click', () => {
    caixa.style.backgroundColor = "green";
});

btnAmarelo.addEventListener( 'click', () => {
    caixa.style.backgroundColor = "yellow";
});

btnAzul.addEventListener( 'click', () => {
    caixa.style.backgroundColor = "blue";
});