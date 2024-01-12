const botaoOrdenacaoPreco = document.getElementById('btnOrdenarPorPreco');

botaoOrdenacaoPreco.addEventListener('click', ordenaLivros);

function ordenaLivros(){
    let livrosOrdenados=  livros.sort((a, b) => a.preco - b.preco);
    montaCard(livrosOrdenados)  
}

