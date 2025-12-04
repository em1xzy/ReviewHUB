// Simulação de dados (COPIADO de main.js para uso aqui)
const produtos = [
  {
    id: 1,
    nome: "Fone Bluetooth XYZ",
    descricao: "Som potente e conexão estável via Bluetooth 5.0.",
    imagem:"./assets/fone.jpg", // A URL da imagem
    media: 4.5
  },
  {
    id: 2,
    nome: "Teclado Mecânico Pro",
    descricao: "Switches azuis, RGB e design ergonômico.",
    imagem: "./assets/teclado.jpg", // A URL da imagem
    media: 4.8
  }
];

// Mantenha a simulação de reviews aqui
const reviews = {
  1: [
    { nota: 5, comentario: "Excelente som!" },
    { nota: 4, comentario: "Bom custo-benefício." }
  ],
  2: [
    { nota: 5, comentario: "Maravilhoso para digitar!" }
  ]
};

// Pega o ID do produto pela URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id')); // Converte para número

// --- NOVO CÓDIGO AQUI ---
// 1. Encontra os dados do produto (incluindo a imagem)
const produtoSelecionado = produtos.find(p => p.id === productId);

if (produtoSelecionado) {
    // 2. Define o nome e a descrição na página
    document.getElementById('product-name').innerText = produtoSelecionado.nome;
    document.getElementById('product-description').innerText = produtoSelecionado.descricao;

    // 3. ATUALIZAÇÃO PRINCIPAL: Define a fonte (src) e o alt da imagem
    const imgElement = document.getElementById('product-image');
    imgElement.src = produtoSelecionado.imagem;
    imgElement.alt = produtoSelecionado.nome;

} else {
    // Caso o ID seja inválido
    document.getElementById('product-name').innerText = "Produto Não Encontrado";
}

// Renderiza reviews (restante do código permanece igual)
function renderReviews() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  (reviews[productId] || []).forEach(r => {
    const li = document.createElement('li');
    li.innerText = `⭐ ${r.nota} — ${r.comentario}`;
    list.appendChild(li);
  });
}
renderReviews();

// Formulário para adicionar review
const form = document.getElementById('review-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nota = parseInt(document.getElementById('rating').value);
  const comentario = document.getElementById('comment').value;
  if (!reviews[productId]) reviews[productId] = [];
  reviews[productId].push({ nota, comentario });
  renderReviews();
  form.reset();
});