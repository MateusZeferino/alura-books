const botao = document.querySelectorAll('.btn');

botao.forEach(btn => btn.addEventListener('click', filtarLivros));

function filtarLivros(){
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value
    let livroFiltrado = categoria == 'disponivel' ? filtraPorDisponibilidade() : filtraPorCategoria(categoria)
    montaCard(livroFiltrado);
    if (categoria == 'disponivel'){
        const valorTotal = calculaValorTotalDeLivrosDisponiveis(livroFiltrado);
        exibirPrecoLivrosDisponiveisNaTela(valorTotal);
    }
}
function filtraPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtraPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirPrecoLivrosDisponiveisNaTela(valor){
    elementoPrecoTotalDeLivros.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
  </div>`;
}