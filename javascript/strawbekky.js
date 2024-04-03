import { cartPick, addToCart } from "../javascript/cart.js";
import { products } from "../javascript/products.js";
let productHTML = '';

products.forEach((product) => {
  productHTML += `
  <div class="product-content">
    <img class="product-img" src="${product.image}">
      <div class="product-details">
        <p class="product-name">${product.name}</p>
        <p class="product-price">₱${product.price}</p>
        </div>
      <div class="add-to-cart">
        <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
    </div>  
  </div>
  `
});
document.querySelector('.product-container').innerHTML = productHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

  cartPick.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
  console.log(cartQuantity);
  console.log(cartPick);
};

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId)
    updateCartQuantity()
  }); 
});
updateCartQuantity();