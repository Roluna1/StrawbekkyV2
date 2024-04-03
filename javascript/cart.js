export let cartPick = JSON.parse(localStorage.getItem('item')) || [];

function saveToStorage() {
  localStorage.setItem('item', JSON.stringify(cartPick));
};

export function addToCart(productId) {
  let matchingItem;

  cartPick.forEach((cartItem) => {
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if (matchingItem){
    matchingItem.quantity += 1;
  } else {
    cartPick.push({
      productId: productId,
      quantity: 1
    })
  }
  saveToStorage()
};

export function removeFromCart(productId) {
  const newCart = [];

  cartPick.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cartPick = newCart
  saveToStorage()
};
