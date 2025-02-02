// Dados das notícias
const noticias = [
    {
        id: 1,
        titulo: "Novo Smartphone Lançado",
        conteudo: "A empresa XYZ lançou seu mais novo smartphone com câmera de 108MP.",
        data: "01/01/2025",
        categoria: "Tecnologia"
    },
    {
        id: 2,
        titulo: "Time Vence Campeonato",
        conteudo: "O time ABC venceu o campeonato nacional após uma partida emocionante.",
        data: "02/01/2025",
        categoria: "Esportes"
    },
    {
        id: 3,
        titulo: "Eleições 2025",
        conteudo: "As eleições de 2025 prometem ser as mais disputadas da história.",
        data: "03/01/2025",
        categoria: "Política"
    }
];

// Função para carregar notícias na página inicial
function carregarNoticias() {
    const noticiasContainer = document.getElementById('noticias');
    noticiasContainer.innerHTML = '';

    noticias.forEach(noticia => {
        const card = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${noticia.titulo}</h5>
                    <p class="card-text">${noticia.conteudo}</p>
                    <a href="noticia.html?id=${noticia.id}" class="btn btn-primary">Ler mais</a>
                </div>
            </div>
        `;
        noticiasContainer.innerHTML += card;
    });
}

// Carrega as notícias ao abrir a página
document.addEventListener('DOMContentLoaded', carregarNoticias);