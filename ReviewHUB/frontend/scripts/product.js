// Simulação de dados
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
const productId = params.get('id');

document.getElementById('product-name').innerText = productId == 1 ? "Fone Bluetooth XYZ" : "Teclado Mecânico Pro";
document.getElementById('product-description').innerText = productId == 1 
  ? "Som potente e conexão estável via Bluetooth 5.0." 
  : "Switches azuis, RGB e design ergonômico.";

// Renderiza reviews
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
