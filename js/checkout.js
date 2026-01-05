// Checkout Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const cart = getCart();
  
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }
  
  renderOrderSummary();
  setupFormHandlers();
  setupPaymentMethods();
  setupShippingOptions();
});

function renderOrderSummary() {
  const cart = getCart();
  const summaryItems = document.getElementById('summary-items');
  
  summaryItems.innerHTML = cart.map(item => `
    <div class="summary-item">
      <div class="summary-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="summary-item-info">
        <h4>${item.name}</h4>
        <p>Qty: ${item.quantity}</p>
      </div>
      <span class="summary-item-price">$${item.price * item.quantity}</span>
    </div>
  `).join('');
  
  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const subtotal = getCartTotal();
  const shippingMethod = document.querySelector('input[name="shipping"]:checked');
  let shipping = 15;
  
  if (shippingMethod) {
    switch (shippingMethod.value) {
      case 'express':
        shipping = 25;
        break;
      case 'overnight':
        shipping = 45;
        break;
      default:
        shipping = 15;
    }
  }
  
  // Free shipping over $200
  if (subtotal >= 200) {
    shipping = 0;
  }
  
  const tax = Math.round(subtotal * 0.08); // 8% tax
  const total = subtotal + shipping + tax;
  
  document.getElementById('checkout-subtotal').textContent = '$' + subtotal;
  document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'Free' : '$' + shipping;
  document.getElementById('checkout-tax').textContent = '$' + tax;
  document.getElementById('checkout-total').textContent = '$' + total;
}

function setupShippingOptions() {
  const shippingOptions = document.querySelectorAll('input[name="shipping"]');
  shippingOptions.forEach(option => {
    option.addEventListener('change', updateCheckoutTotals);
  });
}

function setupPaymentMethods() {
  const paymentMethods = document.querySelectorAll('input[name="payment"]');
  const cardDetails = document.getElementById('card-details');
  
  paymentMethods.forEach(method => {
    method.addEventListener('change', function() {
      if (this.value === 'card') {
        cardDetails.style.display = 'block';
      } else {
        cardDetails.style.display = 'none';
      }
    });
  });
}

function setupFormHandlers() {
  const form = document.getElementById('checkout-form');
  
  // Card number formatting
  const cardNumber = document.getElementById('cardNumber');
  if (cardNumber) {
    cardNumber.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
      let formatted = '';
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formatted += ' ';
        }
        formatted += value[i];
      }
      e.target.value = formatted;
    });
  }
  
  // Expiry date formatting
  const expiry = document.getElementById('expiry');
  if (expiry) {
    expiry.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
      }
      e.target.value = value;
    });
  }
  
  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    // Simulate processing
    const submitBtn = document.getElementById('place-order-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';
    
    setTimeout(function() {
      // Generate order number
      const orderNumber = 'LUM-' + Date.now().toString().slice(-8);
      document.getElementById('order-number').textContent = orderNumber;
      
      // Clear cart
      clearCart();
      
      // Show confirmation modal
      openModal('confirmation-modal');
      
      submitBtn.disabled = false;
      submitBtn.textContent = 'Place Order';
    }, 2000);
  });
}
