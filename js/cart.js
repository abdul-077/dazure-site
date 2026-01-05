// Cart Management
const CART_KEY = 'lumiere_cart';

// Get cart from localStorage
function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

// Add item to cart
function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = getProductById(productId);
  
  if (!product) return;
  
  const existingIndex = cart.findIndex(item => item.id === productId);
  
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  saveCart(cart);
  showNotification(`${product.name} added to cart`);
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

// Update item quantity
function updateQuantity(productId, quantity) {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === productId);
  
  if (index > -1) {
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
    saveCart(cart);
  }
}

// Get cart total
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update cart count in header
function updateCartCount() {
  const countElements = document.querySelectorAll('#cart-count, .cart-count');
  const count = getCartItemCount();
  
  countElements.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Clear cart
function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartCount();
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #1a1918;
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
