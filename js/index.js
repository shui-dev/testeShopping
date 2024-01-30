import cart from './cart.js';
import products from './products.js';

let app = document.querySelector('#app');
let temporaryContent = document.querySelector('#temporaryContent');

// carregar template da pagina e os produtos da pagina
const loadTemplate = () => {
  fetch('/template.html')
    .then(response => response.text())
    .then(html => {
      app.innerHTML = html;
      let contentTab = document.querySelector('#contentTab');
      contentTab.innerHTML = temporaryContent.innerHTML;
      temporaryContent.innerHTML = null;
      cart();
      initApp();
    });
}
loadTemplate();

const initApp = () => {
  // carregar lista de produtos
  let listProduct = document.querySelector('.listProduct');
  listProduct.innerHTML = null;

  products.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('item');
    newProduct.innerHTML = `
      <a href="/detail.html?id=${product.id}"
        <div class="item-img">
          <img src="${product.img}" alt="">
        </div>
        <div class="item-info">
          <p>${product.title}</p>
          <p>R$${product.price}</p>
        </div>
      </a>
      <div class="item-btn">
        <button data-id="${product.id}">COMPRAR</button>
      </div>
    `;
    listProduct.appendChild(newProduct);
  })
}