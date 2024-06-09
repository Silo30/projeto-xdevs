// Objetivo 1 - Quando clicar no seta avançar temos que mostrar o proximo cartão da lista
// passo 1 - dar um jeito de pegar o elemento html da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
// passo 1 - dar um jeito de pegar o elemento html da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
// passo 2 - dar um jeito de identificar o clique do usuário na seta de avançar
btnAvancar.addEventListener("click", function (){
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if(ehUltimoCartao) return;
    // passo 4 - buscar cartão selecionado e esconder
    esconderCartaoSelecionado();
// passo 3 - fazer aparecer o próximo cartão da lista
    
    cartaoAtual++;
    mostrarCartao();

});
// Objetivo 2 - Quando clicarmos na seta voltar, temos que mostrar o cartão anterior da lista
// passo 2 - dar um jeito de identificar o clique do usuário na seta de voltar
btnVoltar.addEventListener("click", function (){
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;
    // passo 4 - buscar cartão selecionado e esconder

    esconderCartaoSelecionado();
// passo 3 - fazer aparecer o cartão anterior da lista
    
    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
