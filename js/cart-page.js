// Cart Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  renderCart();
});

function renderCart() {
  const cart = getCart();
  const cartEmpty = document.getElementById('cart-empty');
  const cartContent = document.getElementById('cart-content');
  const cartItems = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartContent.style.display = 'none';
    return;
  }
  
  cartEmpty.style.display = 'none';
  cartContent.style.display = 'block';
  
  // Render cart items
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>${item.subtitle}</p>
        <div class="quantity-selector">
          <button class="qty-btn" onclick="changeQuantity('${item.id}', -1)">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <div class="cart-item-actions">
        <span class="cart-item-price">$${item.price * item.quantity}</span>
        <button class="remove-btn" onclick="removeItem('${item.id}')" aria-label="Remove item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
  
  // Update summary
  updateSummary();
}

function changeQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    const newQty = item.quantity + delta;
    if (newQty <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQty);
      renderCart();
    }
  }
}

function removeItem(productId) {
  removeFromCart(productId);
  renderCart();
}

function updateSummary() {
  const cart = getCart();
  const subtotal = getCartTotal();
  const shipping = subtotal >= 200 ? 0 : 15;
  const total = subtotal + shipping;
  
  document.getElementById('cart-subtotal').textContent = '$' + subtotal;
  document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Free' : '$' + shipping;
  document.getElementById('cart-total').textContent = '$' + total;
  
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.style.pointerEvents = cart.length === 0 ? 'none' : 'auto';
    checkoutBtn.style.opacity = cart.length === 0 ? '0.5' : '1';
  }
}
