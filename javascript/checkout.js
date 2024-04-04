import { cartPick, removeFromCart } from '../javascript/cart.js'
import { products } from '../javascript/products.js'

let cartSummaryHTML = '';

cartPick.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

console.log(matchingProduct);

cartSummaryHTML +=
  `
<div class="summary-content js-cart-item-container-${matchingProduct.id}">
  <img class="product-img" src="${matchingProduct.image}">
    <div class="product-total-details">
      <p class="product-name">${matchingProduct.name}</p>
       <p class="product-price">₱${matchingProduct.price}</p>
        <div class="product-quantity">
          <p class="product-quantity">Quantity: ${cartItem.quantity}</p>
           <div class="quantity-edit">
          <button class="button-update">Update</button>
          <button class="button-delete" data-product-id="${matchingProduct.id}">Delete</button>
      </div>
    </div>
  </div>
</div>
  `
});

document.querySelector('.summary-container').innerHTML = cartSummaryHTML;
console.log(cartSummaryHTML)

document.querySelectorAll('.button-delete').forEach((link) => {
  link.addEventListener('click', () => {

    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    updateCartQuantity()
    updateTotalPrice()
  });
});
updateCartQuantity()
function updateCartQuantity() {
  let cartQuantity = 0;

  cartPick.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
  document.querySelector('.bottom-quantity').textContent = cartQuantity;
  console.log(cartQuantity);
  console.log(cartPick);
};
function updateTotalPrice() {
  let totalPrice = 0;

  cartPick.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find(product => product.id === productId);
    totalPrice += matchingProduct.price * cartItem.quantity;
  });
  document.querySelector('.price-text').textContent = `${totalPrice}`;
}
updateTotalPrice()

