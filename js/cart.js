import products from "./products.js";

const cart = () => {
  let iconCart = document.querySelector('.icon-cart');
  let closeBtn = document.querySelector('.cartTab .close');
  let body = document.querySelector('body');
  let cart = [];

  iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
  });

  closeBtn.addEventListener('click', () => {
    body.classList.remove('activeTabCart');
  });

  
  const setProductInCart = (idProduct, quantity, position) => {
    if(quantity > 0) {
      if(position < 0) {
        cart.push({
          product_id: idProduct,
          quantity: quantity
        })
      } else {
        cart[position].quantity = quantity;
      }
    }
    refreshCart();
  }
  const refreshCart = () => {
    let listHTML = document.querySelector('.listCart');
    let totalHTML = document.querySelector('.icon-cart span');
    let totalQuantity = 0;
    listHTML.innerHTML = null;
    cart.forEach(item => {
      totalQuantity = totalQuantity + item.quantity;
      let newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
        <div class="image">
          <img src=""/>
        </div>
        <div class="name">Name</div>
        <div class="totalPrice">R$ 120</div>
        <div class="quantity">
          <span class="minus">-</span>
          <span>1</span>
        </div>
      `;
      listHTML.appendChild(newItem);4
    });
    totalHTML.innerText = totalQuantity;
  }
  // event click
  document.addEventListener('click', e => {
    const el = e.target;
    let idProduct = el.dataset.id;
    let position = cart.findIndex(value => value.product_id == idProduct);
    let quantity = position < 0 ? 0 : cart[position].quantity;

    if(el.classList.contains('addCart')) {
      quantity++;
      setProductInCart(idProduct, quantity, position);
    };
  })
}

export default cart;