
const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btntroca = document.getElementById("btn-troca");

btntroca.addEventListener('click', () => {
    nomeSaida.textContent = nomeEntrada.value;
});

btntroca.addEventListener('mouseenter', () => {
    nomeSaida.style.color = "#0026fd";
});

btntroca.addEventListener('mouseout', () => {
    nomeSaida.style.color = "#000";
});

// Trocandoa a cor da caixa


const btnVerde = document.getElementById("btn-verde");
const btnAmarelo = document.getElementById("btn-amarelo");
const btnAzul = document.getElementById("btn-azul");
const caixa = document.getElementById("caixa");

btnVerde.addEventListener('click', () => {
    caixa.style.backgroundColor = "green";
});

btnAmarelo.addEventListener('click', () => {
    caixa.style.backgroundColor = "yellow";
});

btnAzul.addEventListener('click', () => {
    caixa.style.backgroundColor = "blue";
});

/// Simulando adição e subtração de valor ///
const valorReal = document.getElementById("valor_real");
let contador = 0;

document.getElementById("btn_menos").addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        valorReal.textContent = contador;
    }
});

document.getElementById("btn_mais").addEventListener('click', () => {
    contador++;
    valorReal.textContent = contador;
});

// Adicionando Livros //

const nomeLivro = document.getElementById("nome_livro");
const lista_livros = document.getElementById("lista_livros");

document.getElementById("adiciona_livro").addEventListener('click',
    () => {
        const novoLivro = document.createElement("li")
        novoLivro.textContent = nomeLivro.value;
       
        const novoButton = document.createElement("button");
        novoButton.textContent = "X";
        novoButton.style.marginLeft = "20px"

        novoLivro.appendChild(novoButton);

        lista_livros.appendChild(novoLivro);

        novoButton.addEventListener( 'click', () => {
            novoLivro.remove();
        })

});

document.getElementById("apagar_livro").addEventListener('click', () => {
    lista_livros.innerText = ""
});
