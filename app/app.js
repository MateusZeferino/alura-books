let livros = [];
const EndPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivro();

async function getLivro(){
    const resposta = await fetch(EndPoint);
    livros = await resposta.json();
    let livrosComDesconto = aplicaDesconto(livros);
    montaCard(livrosComDesconto);
    
}
