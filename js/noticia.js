// Dados das notícias (mesmo array usado em scripts.js)
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

// Função para carregar a notícia individual
function carregarNoticia() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const noticia = noticias.find(n => n.id == id);

    if (noticia) {
        document.getElementById('titulo-noticia').textContent = noticia.titulo;
        document.getElementById('conteudo-noticia').textContent = noticia.conteudo;
        document.getElementById('data-publicacao').textContent = noticia.data;
    } else {
        document.getElementById('titulo-noticia').textContent = "Notícia não encontrada";
    }
}

// Carrega a notícia ao abrir a página
document.addEventListener('DOMContentLoaded', carregarNoticia);