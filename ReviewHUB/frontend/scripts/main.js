const produtos = [
  {
    id: 1,
    nome: "Fone Bluetooth XYZ",
    descricao: "Som potente e conexão estável via Bluetooth 5.0.",
    imagem: "./assets/logo.png",
    media: 4.5
  },
  {
    id: 2,
    nome: "Teclado Mecânico Pro",
    descricao: "Switches azuis, RGB e design ergonômico.",
    imagem: "./assets/logo.png",
    media: 4.8
  }
];

const productList = document.getElementById('product-list');

produtos.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.innerHTML = `
    <img src="${p.imagem}" alt="${p.nome}">
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <p>⭐ ${p.media.toFixed(1)}</p>
    <a href="product.html?id=${p.id}"><button>Ver Avaliações</button></a>
  `;
  productList.appendChild(div);
});
