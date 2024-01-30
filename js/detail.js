import products from "./products.js";
import cart from "./cart.js";

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
  let idProduct = new URLSearchParams(window.location.search).get('id'); // ele procura o id na tag 'a'
  let info = products.filter(value => value.id == idProduct)[0]; // se o id do array products for igual ao do item clicado
  if(!info) window.location.href = '/'; // vericacao, se caso o id nao existir no array ele ira redirecionar para pagina inicial
  let detail = document.querySelector('.detail');
  
  document.querySelector('.category').innerText = info.category;
  detail.querySelector('.image img').src = info.img;
  detail.querySelector('.name').innerText = info.title;
  detail.querySelector('.price').innerText += info.price;
}