document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const checkoutForm = document.getElementById('checkoutForm');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simple validation
            const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'country', 'postalCode'];
            let isValid = true;
            
            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (!field.value.trim()) {
                    field.classList.add('border-red-300');
                    isValid = false;
                } else {
                    field.classList.remove('border-red-300');
                }
            });
            
            if (isValid) {
                // Simulate successful order placement
                placeOrderBtn.textContent = 'Processing...';
                placeOrderBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Your order has been placed successfully!');
                    placeOrderBtn.textContent = 'Place Order';
                    placeOrderBtn.disabled = false;
                }, 1500);
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Format card number input
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '');
            if (value.length > 0) {
                value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
            }
            e.target.value = value;
        });
    }
    
    // Format expiry date input
    const expiryDate = document.getElementById('expiryDate');
    if (expiryDate) {
        expiryDate.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
});
